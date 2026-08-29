import { setPassword } from '../actions/setPassword'
import { storeJson } from '../fileModels/store.json'
import { i18n } from '../i18n'
import { sdk } from '../sdk'

// Critical, so the service cannot start before the dashboard has a
// management password; setting one retracts the task.
export const watchPassword = sdk.setupOnInit(async (effects) => {
  if (!(await storeJson.read((s) => s?.initialPassword).const(effects))) {
    await sdk.action.createOwnTask(effects, setPassword, 'critical', {
      reason: i18n(
        'The dashboard needs a management password — set one before starting the service',
      ),
    })
  }
})
