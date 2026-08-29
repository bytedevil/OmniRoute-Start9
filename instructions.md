# OmniRoute per a StartOS — Guia d'instal·lació i ús

**OmniRoute** és un gateway d'IA gratuït: un únic endpoint compatible amb
OpenAI que encamina qualsevol model a 350+ proveïdors (90+ amb nivell
gratuït), amb fallback automàtic, compressió de tokens (RTK + Caveman),
19 estratègies d'enrutament i un panell complet.

## Instal·lació

1. Descarrega `omniroute.s9pk` des de [Releases](https://github.com/bytedevil/OmniRoute-Start9/releases)
2. A StartOS: **Sistema → Sideload Service** → selecciona el fitxer
3. Obre el servei → apareixerà la **tasca crítica**: *Set Management Password*
   → executa-la i **guarda la contrasenya** (només es mostra un cop;
   l'usuari del panell és sempre `admin`)
4. Espera que la salut del servei es posi verda (~30-60s)

## Ús

- **Panell (Dashboard)**: obre la interfície *Dashboard* des de la pàgina del
  servei i inicia sessió amb `admin` + la contrasenya. Des del panell pots
  configurar claus de proveïdors, enrutament, compressió, etc.
- **API**: la interfície *API* és l'endpoint compatible amb OpenAI
  (`/v1/chat/completions`). Apunta les teves eines (Claude Code, Codex,
  Cursor, OpenCode, Cline, Copilot...) a l'URL de la interfície API amb la
  teva clau d'API d'OmniRoute.
- **Live WebSocket**: interfície per a les actualitzacions del panell en
  temps real (no cal configurar res).

## Dades i persistència

Tot es guarda al volum `main` (SQLite + secrets generats automàticament a
`/data/server.env`): converses, configuracions, claus de proveïdors i la
contrasenya. Els backups de StartOS inclouen el volum sencer — **tracta un
backup com si portés les claus**.

## Canviar la contrasenya

La contrasenya d'administració es pot canviar des del mateix panell
(Configuració). L'acció *Reset Management Password* només fixa la
contrasenya inicial de l'aplicació.

## Limitacions

- Sense Redis: el gateway funciona amb el driver SQLite (fallback automàtic
  d'OmniRoute). Les funcions de quota compartida a escala usen SQLite en
  lloc de Redis.
- Proveïdors web-cookie (gemini-web, claude-web, claude-turnstile)
  requereixen la imatge `runner-web` amb Chromium; aquest paquet usa la
  imatge `runner-cli` estàndard de producció, per tant aquests proveïdors
  no estan disponibles.
- L'endpoint API és obert per disseny (l'app gestiona les seves pròpies
  claus API). Configura `REQUIRE_API_KEY` des del panell si vols exigir clau.

## Suport

- Issues del paquet: https://github.com/bytedevil/OmniRoute-Start9/issues
- Projecte original: https://github.com/diegosouzapw/OmniRoute
