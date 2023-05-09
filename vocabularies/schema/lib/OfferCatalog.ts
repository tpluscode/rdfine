import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ItemListMixin } from './ItemList.js';

export interface OfferCatalog<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.ItemList<D>, rdfine.RdfResource<D> {
}

export function OfferCatalogMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<OfferCatalog> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class OfferCatalogClass extends ItemListMixin(Resource) implements Partial<OfferCatalog> {
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

export const fromPointer = createFactory<OfferCatalog>([ItemListMixin, OfferCatalogMixin], { types: [schema.OfferCatalog] });
