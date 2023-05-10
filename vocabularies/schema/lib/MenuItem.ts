import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { IntangibleMixin } from './Intangible.js';

export interface MenuItem<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Intangible<D>, rdfine.RdfResource<D> {
  menuAddOn: Schema.MenuItem<D> | Schema.MenuSection<D> | undefined;
  nutrition: Schema.NutritionInformation<D> | undefined;
  offers: Schema.Demand<D> | Schema.Offer<D> | undefined;
  suitableForDiet: Schema.RestrictedDiet | undefined;
}

export function MenuItemMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<MenuItem> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class MenuItemClass extends IntangibleMixin(Resource) implements Partial<MenuItem> {
    @rdfine.property.resource()
    menuAddOn: Schema.MenuItem | Schema.MenuSection | undefined;
    @rdfine.property.resource()
    nutrition: Schema.NutritionInformation | undefined;
    @rdfine.property.resource()
    offers: Schema.Demand | Schema.Offer | undefined;
    @rdfine.property()
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

export const fromPointer = createFactory<MenuItem>([IntangibleMixin, MenuItemMixin], { types: [schema.MenuItem] });
