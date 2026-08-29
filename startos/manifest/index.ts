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
        // upstream defaults (6 GB heap × parent+worker). Cap the build budget
        // so the Next.js build never OOMs the runner (docker-build-memory-
        // budget-test covers these knobs).
        dockerBuild: {
          buildArgs: {
            OMNIROUTE_BUILD_MEMORY_MB: '3072',
            OMNIROUTE_BUILD_WORKERS: '1',
          },
        },
      },
      arch: ['x86_64', 'aarch64'],
    },
  },
  dependencies: {},
})
