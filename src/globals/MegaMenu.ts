import { GlobalConfig } from "payload/types";
import link from "../fields/link";

const MegaMenu: GlobalConfig = {
  slug: 'mega-menu',
  fields: [
    {
      name: 'navigation',
      label: 'Navigation',
      type: 'array',
      fields: [
        link
      ]
    }
  ]
};

export default MegaMenu;