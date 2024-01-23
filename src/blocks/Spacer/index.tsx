import { Block } from "payload/types";

const Spacer: Block =  {
  slug: 'spacer',
  fields: [
    {
      name: 'size',
      label: 'Size',
      type: 'radio',
      options: [
        {
          label: 'Small',
          value: 'small',
        },
        {
          label: 'Medium',
          value: 'medium',
        },
        {
          label: 'Large',
          value: 'large',
        },
      ],
    }
  ]
}


export default Spacer;