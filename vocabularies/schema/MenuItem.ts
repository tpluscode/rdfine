import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import IntangibleMixin from './Intangible';

export interface MenuItem extends Schema.Intangible, RdfResource {
  menuAddOn: MenuItem | Schema.MenuSection;
  nutrition: Schema.NutritionInformation;
  offers: Schema.Demand | Schema.Offer;
  suitableForDiet: Schema.RestrictedDiet;
}

export default function MenuItemMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MenuItemClass extends IntangibleMixin(Resource) implements MenuItem {
    @property.resource()
    menuAddOn!: MenuItem | Schema.MenuSection;
    @property.resource()
    nutrition!: Schema.NutritionInformation;
    @property.resource()
    offers!: Schema.Demand | Schema.Offer;
    @property()
    suitableForDiet!: Schema.RestrictedDiet;
  }
  return MenuItemClass
}

class MenuItemImpl extends MenuItemMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.MenuItem)
  }
}
MenuItemMixin.shouldApply = (r: RdfResource) => r.types.has(schema.MenuItem)
MenuItemMixin.Class = MenuItemImpl
