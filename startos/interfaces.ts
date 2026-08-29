import { i18n } from './i18n'
import { sdk } from './sdk'
import { apiPort, liveWsPort, uiPort } from './utils'

export const setInterfaces = sdk.setupInterfaces(async ({ effects }) => {
  // Dashboard (web UI) — the app has its own login (admin + management
  // password), so no edge auth is needed here.
  const uiMulti = sdk.MultiHost.of(effects, 'omniroute-ui')
  const uiOrigin = await uiMulti.bindPort(uiPort, {
    protocol: 'http',
    preferredExternalPort: uiPort,
  })
  const ui = sdk.createInterface(effects, {
    name: i18n('Dashboard'),
    id: 'dashboard',
    description: i18n('OmniRoute dashboard web interface'),
    type: 'ui',
    masked: false,
    schemeOverride: null,
    username: null,
    path: '',
    query: {},
  })

  // OpenAI-compatible endpoint for AI tools (Claude Code, Codex, Cursor...).
  // Protected by the app's own API-key system (REQUIRE_API_KEY).
  const apiMulti = sdk.MultiHost.of(effects, 'omniroute-api')
  const apiOrigin = await apiMulti.bindPort(apiPort, {
    protocol: 'http',
    preferredExternalPort: apiPort,
  })
  const api = sdk.createInterface(effects, {
    name: i18n('API'),
    id: 'api',
    description: i18n(
      'OpenAI-compatible API endpoint for AI tools (Claude Code, Codex, Cursor, OpenCode, Cline...)',
    ),
    type: 'api',
    masked: false,
    schemeOverride: null,
    username: null,
    path: '',
    query: {},
  })

  // Live dashboard websocket.
  const wsMulti = sdk.MultiHost.of(effects, 'omniroute-ws')
  const wsOrigin = await wsMulti.bindPort(liveWsPort, {
    protocol: 'http',
    preferredExternalPort: liveWsPort,
  })
  const ws = sdk.createInterface(effects, {
    name: i18n('Live WebSocket'),
    id: 'live-ws',
    description: i18n('Live dashboard updates (requests, combo, credentials)'),
    type: 'api',
    masked: false,
    schemeOverride: null,
    username: null,
    path: '',
    query: {},
  })

  return [
    await uiOrigin.export([ui]),
    await apiOrigin.export([api]),
    await wsOrigin.export([ws]),
  ]
})
