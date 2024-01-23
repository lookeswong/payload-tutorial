import path from 'path'

import { payloadCloud } from '@payloadcms/plugin-cloud';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { webpackBundler } from '@payloadcms/bundler-webpack';
import { slateEditor } from '@payloadcms/richtext-slate';
import { buildConfig } from 'payload/config';

import Users from './collections/Users';
import FormSubmission from './collections/FormSubmission';
import Study from './collections/Study';
import Category from './collections/Category';
import  Media from './collections/Media';
import Page from './collections/Pages';
import Footer from './globals/Footer';
import MegaMenu from './globals/MegaMenu';
import SocialMedia from './globals/SocialMedia';

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_EXTERNAL_SERVER_URL,
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  collections: [
    Users,
    Study,
    FormSubmission,
    Category,
    Media,
    Page,
  ],
  globals: [
    Footer,
    MegaMenu,
    SocialMedia
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    disable: true
  },
  plugins: [payloadCloud()],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
})
