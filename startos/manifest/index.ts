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
        dockerBuild: {},
      },
      arch: ['x86_64', 'aarch64'],
    },
  },
  dependencies: {},
})
