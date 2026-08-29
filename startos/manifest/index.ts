import { setupManifest } from '@start9labs/start-sdk'
import { long, short } from './i18n'

export const manifest = setupManifest({
  id: 'omniroute',
  title: 'OmniRoute',
  license: 'MIT',
  author: 'Pau Font Martínez',
  packageRepo: 'https://github.com/bytedevil/OmniRoute-Start9',
  upstreamRepo: 'https://github.com/diegosouzapw/OmniRoute',
  supportSite: 'https://github.com/bytedevil/OmniRoute-Start9/issues',
  marketingUrl: 'https://omniroute.online',
  donationUrl: 'https://www.paypal.com/paypalme/pfont',
  description: { short, long },
  volumes: ['main'],
  images: {
    main: {
      source: {
        // Build the upstream multi-stage Dockerfile (repo root). The default
        // final stage (runner-cli) is what upstream's production compose uses.
        // Memory: GitHub runners (16 GB) + QEMU for arm64 cannot hold the
        // upstream defaults (6 GB heap × parent+worker). Turbopack compiles
        // in native Rust memory that NODE_OPTIONS cannot bound (per the
        // Dockerfile's own notes) — the escape hatch the project documents is
        // webpack (V8-bounded). Single process (0 workers) + 4 GB heap fits
        // comfortably on a 16 GB runner, even under QEMU.
        dockerBuild: {
          buildArgs: {
            OMNIROUTE_USE_TURBOPACK: '0',
            OMNIROUTE_BUILD_MEMORY_MB: '4096',
            OMNIROUTE_BUILD_WORKERS: '1',
          },
        },
      },
      arch: ['x86_64', 'aarch64'],
    },
  },
  dependencies: {},
})
