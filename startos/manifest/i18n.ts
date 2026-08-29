import { LangDict } from '../i18n/dictionaries/default'

const short = {
  en_US: 'Free AI gateway: one endpoint, 350+ providers, auto-fallback',
  es_ES: 'Puerta de enlace IA gratuita: un endpoint, 350+ proveedores, respaldo automático',
  de_DE: 'Kostenloses KI-Gateway: ein Endpunkt, 350+ Anbieter, automatisches Fallback',
  pl_PL: 'Darmowa brama AI: jeden endpoint, 350+ dostawców, automatyczne fallback',
  fr_FR: 'Passerelle IA gratuite : un endpoint, 350+ fournisseurs, repli automatique',
} satisfies Record<string, string>

const long = {
  en_US:
    'OmniRoute is a unified AI proxy/router: route any LLM through one OpenAI-compatible endpoint with quota-aware auto-fallback across 350+ providers (90+ free tiers), RTK + Caveman compression (saves 15-95% tokens), 19 routing strategies, MCP/A2A servers, and a full dashboard. Zero-config: secrets are auto-generated and persisted in the data volume; set the management password on first run. Works with Claude Code, Codex, Cursor, OpenCode, Cline and Copilot.',
  es_ES:
    'OmniRoute es un proxy/router de IA unificado: enruta cualquier LLM a través de un único endpoint compatible con OpenAI, con respaldo automático sensible a cuotas entre 350+ proveedores (90+ niveles gratuitos), compresión RTK + Caveman (ahorra 15-95% de tokens), 19 estrategias de enrutado, servidores MCP/A2A y un panel completo. Configuración cero: los secretos se generan y persisten en el volumen de datos; establece la contraseña de administración en el primer arranque. Compatible con Claude Code, Codex, Cursor, OpenCode, Cline y Copilot.',
  de_DE:
    'OmniRoute ist ein einheitlicher KI-Proxy/Router: leiten Sie jedes LLM über einen OpenAI-kompatiblen Endpunkt mit kontingentbewusstem automatischem Fallback über 350+ Anbieter (90+ kostenlose Stufen), RTK- + Caveman-Komprimierung (spart 15-95% Tokens), 19 Routing-Strategien, MCP/A2A-Servern und einem vollständigen Dashboard. Zero-Config: Geheimnisse werden automatisch generiert und im Datenvolumen gespeichert; legen Sie beim ersten Start das Verwaltungskennwort fest. Kompatibel mit Claude Code, Codex, Cursor, OpenCode, Cline und Copilot.',
  pl_PL:
    'OmniRoute to ujednolicony proxy/router AI: kieruj dowolny LLM przez jeden endpoint zgodny z OpenAI z automatycznym fallbackiem uwzględniającym limity dla 350+ dostawców (90+ poziomów darmowych), kompresją RTK + Caveman (oszczędza 15-95% tokenów), 19 strategiami routingu, serwerami MCP/A2A i pełnym panelem. Zero-konfiguracji: sekrety są generowane automatycznie i zapisywane w wolumenie danych; ustaw hasło zarządzania przy pierwszym uruchomieniu. Kompatybilny z Claude Code, Codex, Cursor, OpenCode, Cline i Copilot.',
  fr_FR:
    "OmniRoute est un proxy/routeur IA unifié : acheminez n'importe quel LLM via un endpoint compatible OpenAI avec repli automatique sensible aux quotas sur 350+ fournisseurs (90+ niveaux gratuits), compression RTK + Caveman (économise 15-95% de tokens), 19 stratégies de routage, serveurs MCP/A2A et un tableau de bord complet. Zéro configuration : les secrets sont générés et persistés dans le volume de données ; définissez le mot de passe d'administration au premier démarrage. Compatible avec Claude Code, Codex, Cursor, OpenCode, Cline et Copilot.",
} satisfies Record<string, string>

export { long, short }
