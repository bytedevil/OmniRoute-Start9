// Ports the OmniRoute app binds inside the container (see docker-compose.prod.yml)
export const uiPort = 20128 // dashboard (PORT)
export const apiPort = 20129 // OpenAI-compatible endpoint (API_PORT)
export const liveWsPort = 20132 // live dashboard websocket (LIVE_WS_PORT)
export const dataDir = '/data' // StartOS main volume (DATA_DIR)
export const appUser = '1000' // the image's baked-in `node` user
