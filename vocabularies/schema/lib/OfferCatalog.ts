import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ItemListMixin } from './ItemList';

export interface OfferCatalog<ID extends ResourceNode = ResourceNode> extends Schema.ItemList<ID>, RdfResource<ID> {
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
