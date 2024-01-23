import { Field } from "payload/types";

const link: Field = {
  name: 'link',
  type: 'group',
  fields: [
    {
      name: 'type',
      type: 'radio',
      options: [
        {
          label: 'Page',
          value: 'page'
        },
        {
          label: 'Custom URL',
          value: 'custom'
        },
      ],
      defaultValue: 'page',
      admin: {
        layout: 'horizontal'
      }
    },
    {
      type: 'row',
      fields: [
        {
          name: 'label',
          label: 'Label',
          type: 'text',
          required: true,
          admin: {
            width: '50%'
          }
        },
        {
          name: 'page',
          label: 'page to link to',
          type: 'relationship',
          relationTo: 'pages',
          required: true,
          admin: {
            condition: (_, siblingData) => siblingData?.type === 'page',
            width: '50%'
          }
        },
        {
          name: 'url',
          label: 'Custom URL',
          type: 'text',
          required: true,
          admin: {
            condition: (_, siblingData) => siblingData?.type === 'custom',
            width: '50%'
          }
        }
      ]
    },
  ]
}

export default link;