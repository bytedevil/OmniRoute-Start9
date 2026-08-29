import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '3.8.51:0',
  releaseNotes: {
    en_US:
      'Initial StartOS package for OmniRoute v3.8.51: dashboard, OpenAI-compatible API endpoint and live WebSocket exposed as StartOS interfaces; persistent data volume; critical management-password bootstrap task.',
    es_ES:
      'Paquete StartOS inicial para OmniRoute v3.8.51: panel, endpoint de API compatible con OpenAI y WebSocket en vivo expuestos como interfaces de StartOS; volumen de datos persistente; tarea crítica de arranque con contraseña de administración.',
    de_DE:
      'Erstes StartOS-Paket für OmniRoute v3.8.51: Dashboard, OpenAI-kompatibler API-Endpunkt und Live-WebSocket als StartOS-Schnittstellen; persistentes Datenvolumen; kritische Bootstrap-Aufgabe für das Verwaltungskennwort.',
    pl_PL:
      'Pierwszy pakiet StartOS dla OmniRoute v3.8.51: panel, endpoint API zgodny z OpenAI i WebSocket na żywo jako interfejsy StartOS; trwały wolumen danych; krytyczne zadanie inicjalizacji hasła zarządzania.',
    fr_FR:
      "Premier paquet StartOS pour OmniRoute v3.8.51 : tableau de bord, endpoint API compatible OpenAI et WebSocket en direct exposés comme interfaces StartOS ; volume de données persistant ; tâche critique de bootstrap du mot de passe d'administration.",
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
