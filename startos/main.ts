import { i18n } from './i18n'
import { sdk } from './sdk'
import { storeJson } from './fileModels/store.json'
import { apiPort, appUser, dataDir, liveWsPort, uiPort } from './utils'

export const main = sdk.setupMain(async ({ effects }) => {
  console.info(i18n('Starting OmniRoute'))

  const store = (await storeJson.read().const(effects)) ?? {
    initialPassword: '',
  }

  return sdk.Daemons.of(effects)
    // The image's baked-in user is `node` (UID 1000) but StartOS mounts the
    // main volume as root — hand it over so the app can write its SQLite
    // databases and server.env secrets.
    .addOneshot('chown-data', {
      subcontainer: sdk.SubContainer.of(
        effects,
        { imageId: 'main' },
        sdk.Mounts.of().mountVolume({
          volumeId: 'main',
          subpath: null,
          mountpoint: dataDir,
          readonly: false,
        }),
        'chown-data',
      ),
      exec: {
        command: ['chown', '-R', appUser, dataDir],
        user: 'root',
      },
      requires: [],
    })
    .addDaemon('omniroute', {
      subcontainer: sdk.SubContainer.of(
        effects,
        { imageId: 'main' },
        sdk.Mounts.of().mountVolume({
          volumeId: 'main',
          subpath: null,
          mountpoint: dataDir,
          readonly: false,
        }),
        'omniroute',
      ),
      exec: {
        command: ['node', 'dev/run-standalone.mjs'],
        env: {
          NODE_ENV: 'production',
          HOSTNAME: '0.0.0.0',
          PORT: String(uiPort),
          DASHBOARD_PORT: String(uiPort),
          API_PORT: String(apiPort),
          LIVE_WS_PORT: String(liveWsPort),
          LIVE_WS_HOST: '0.0.0.0',
          API_HOST: '0.0.0.0',
          DATA_DIR: dataDir,
          OMNIROUTE_MIGRATIONS_DIR: '/app/migrations',
          OMNIROUTE_MEMORY_MB: '2048',
          AUTH_COOKIE_SECURE: 'false',
          INITIAL_PASSWORD: store.initialPassword,
        },
      },
      ready: {
        display: i18n('OmniRoute Gateway'),
        // The app's own healthcheck probes /healthz (pure in-memory check);
        // give it time to boot the Next.js standalone server.
        trigger: sdk.trigger.cooldownTrigger(30_000),
        fn: () =>
          sdk.healthCheck.checkWebUrl(effects, `http://localhost:${uiPort}/healthz`, {
            successMessage: i18n('The OmniRoute gateway is running'),
            errorMessage: i18n('The OmniRoute gateway is not responding'),
          }),
      },
      requires: ['chown-data'],
    })
})
