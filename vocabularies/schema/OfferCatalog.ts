import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { ItemListMixin } from './ItemList';

export interface OfferCatalog extends Schema.ItemList, RdfResource {
}

export function OfferCatalogMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class OfferCatalogClass extends ItemListMixin(Resource) implements OfferCatalog {
  }
  return OfferCatalogClass
}

class OfferCatalogImpl extends OfferCatalogMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<OfferCatalog>) {
    super(arg, init)
    this.types.add(schema.OfferCatalog)
  }

  static readonly __mixins: Mixin[] = [OfferCatalogMixin, ItemListMixin];
}
OfferCatalogMixin.appliesTo = schema.OfferCatalog
OfferCatalogMixin.Class = OfferCatalogImpl
