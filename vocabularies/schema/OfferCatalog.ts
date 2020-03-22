import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import ItemListMixin from './ItemList';

export interface OfferCatalog extends Schema.ItemList, RdfResource {
}

export default function OfferCatalogMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class OfferCatalogClass extends ItemListMixin(Resource) implements OfferCatalog {
  }
  return OfferCatalogClass
}

class OfferCatalogImpl extends OfferCatalogMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.OfferCatalog)
  }
}
OfferCatalogMixin.shouldApply = (r: RdfResource) => r.types.has(schema.OfferCatalog)
OfferCatalogMixin.Class = OfferCatalogImpl