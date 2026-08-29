export const DEFAULT_LANG = 'en_US'

const dict = {
  // main.ts
  'Starting OmniRoute': 0,
  'OmniRoute Gateway': 1,
  'The OmniRoute gateway is running': 2,
  'The OmniRoute gateway is not responding': 3,
  // interfaces.ts
  'Dashboard': 4,
  'OmniRoute dashboard web interface': 5,
  'API': 6,
  'OpenAI-compatible API endpoint for AI tools (Claude Code, Codex, Cursor, OpenCode, Cline...)': 7,
  'Live WebSocket': 8,
  'Live dashboard updates (requests, combo, credentials)': 9,
  // actions/setPassword.ts
  'Set Management Password': 10,
  'Reset Management Password': 11,
  'Generate the password for the OmniRoute dashboard login. The username is always "admin".': 12,
  'The current password stops working as soon as this runs.': 13,
  'Management Password Set': 14,
  'Save the password now — it is not shown again. Anyone who has it can administer the gateway and use any configured provider keys.': 15,
  // init/watchPassword.ts
  'The dashboard needs a management password — set one before starting the service': 16,
} as const

export type I18nKey = keyof typeof dict
export type LangDict = Record<(typeof dict)[I18nKey], string>
export default dict
