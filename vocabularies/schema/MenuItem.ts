import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { IntangibleMixin } from './Intangible';

export interface MenuItem<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Intangible<D>, RdfResource<D> {
  menuAddOn: Schema.MenuItem<D> | Schema.MenuSection<D> | undefined;
  nutrition: Schema.NutritionInformation<D> | undefined;
  offers: Schema.Demand<D> | Schema.Offer<D> | undefined;
  suitableForDiet: Schema.RestrictedDiet | undefined;
}

export function MenuItemMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MenuItemClass extends IntangibleMixin(Resource) implements MenuItem {
    @property.resource()
    menuAddOn: Schema.MenuItem | Schema.MenuSection | undefined;
    @property.resource()
    nutrition: Schema.NutritionInformation | undefined;
    @property.resource()
    offers: Schema.Demand | Schema.Offer | undefined;
    @property()
    suitableForDiet: Schema.RestrictedDiet | undefined;
  }
  return MenuItemClass
}

class MenuItemImpl extends MenuItemMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MenuItem>) {
    super(arg, init)
    this.types.add(schema.MenuItem)
  }

  static readonly __mixins: Mixin[] = [MenuItemMixin, IntangibleMixin];
}
MenuItemMixin.appliesTo = schema.MenuItem
MenuItemMixin.Class = MenuItemImpl
