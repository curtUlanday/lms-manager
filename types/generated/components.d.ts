import type { Schema, Struct } from '@strapi/strapi';

export interface MyCompsFormula extends Struct.ComponentSchema {
  collectionName: 'components_my_comps_formulas';
  info: {
    description: '';
    displayName: 'Formula';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'my-comps.formula': MyCompsFormula;
    }
  }
}
