import { utils } from '@start9labs/start-sdk'
import { storeJson } from '../fileModels/store.json'
import { i18n } from '../i18n'
import { sdk } from '../sdk'

export const setPassword = sdk.Action.withoutInput(
  'set-password',

  async ({ effects }) => {
    const alreadySet = !!(await storeJson
      .read((s) => s?.initialPassword)
      .const(effects))
    return {
      name: alreadySet
        ? i18n('Reset Management Password')
        : i18n('Set Management Password'),
      description: i18n(
        'Generate the password for the OmniRoute dashboard login. The username is always "admin".',
      ),
      warning: alreadySet
        ? i18n('The current password stops working as soon as this runs.')
        : null,
      allowedStatuses: 'any',
      group: null,
      visibility: 'enabled',
    }
  },

  async ({ effects }) => {
    const password = utils.getDefaultString({ charset: 'a-z,A-Z,0-9', len: 24 })
    await storeJson.merge(effects, { initialPassword: password })

    return {
      version: '1' as const,
      title: i18n('Management Password Set'),
      message: i18n(
        'Save the password now — it is not shown again. Anyone who has it can administer the gateway and use any configured provider keys.',
      ),
      result: {
        type: 'single',
        value: password,
        copyable: true,
        qr: false,
        masked: true,
      },
    }
  },
)
