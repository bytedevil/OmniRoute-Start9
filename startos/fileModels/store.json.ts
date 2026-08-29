import { FileHelper, z } from '@start9labs/start-sdk'
import { sdk } from '../sdk'

/**
 * Persistent service settings. The management password lives here (on the
 * user's own server volume) and is injected into the container as
 * INITIAL_PASSWORD; OmniRoute hashes it into its SQLite settings on first
 * boot and ignores it afterwards (change it from the dashboard thereafter).
 */
const shape = z.object({
  initialPassword: z.string().catch(''),
})

export const storeJson = FileHelper.json(
  { base: sdk.volumes.main, subpath: './store.json' },
  shape,
)
