import formatSlug from '../utilities/formatSlug';
import type { Field } from 'payload/types';

const slug: Field = {
  name: 'slug',
  label: 'Slug',
  type: 'text',
  admin: {
    position: 'sidebar',
  },
  hooks: {
    beforeValidate: [
      formatSlug('title'),
    ],
  },
}

export default slug;