import path from 'path';
import { buildConfig } from 'payload/config';
import seo from '@payloadcms/plugin-seo'
import computeBlurhash from 'payload-blurhash-plugin'

import Users from './collections/Users';
import Media from './collections/Media';
import Posts from './collections/Posts';
import Pages from './collections/Pages';

export default buildConfig({
  serverURL: 'http://localhost:3000',
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    Media,
    Posts,
    Pages,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [
    seo({
      collections: ['posts', 'pages'],
      uploadsCollection: 'media',
      generateTitle: ({ doc }) => `Nuxt Payload - ${doc?.title?.value}`,
      generateDescription: ({ doc }) => doc?.excerpt?.value
    }),
    computeBlurhash()
  ]
});
