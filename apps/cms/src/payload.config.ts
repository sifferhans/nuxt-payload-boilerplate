import path from 'path';
import { buildConfig } from 'payload/config';
import seo from '@payloadcms/plugin-seo'
import computeBlurhash from 'payload-blurhash-plugin'

import Posts from './collections/Posts';
import Users from './collections/Users';
import Media from './collections/Media';

export default buildConfig({
  serverURL: 'http://localhost:3000',
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    Posts,
    Media
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [
    seo({
      collections: ['posts'],
      uploadsCollection: 'media',
      generateTitle: ({ doc }) => `Nuxt Payload - ${doc?.title?.value}`,
      generateDescription: ({ doc }) => doc?.excerpt?.value
    }),
    computeBlurhash()
  ]
});
