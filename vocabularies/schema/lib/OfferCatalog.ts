import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ItemListMixin } from './ItemList';

export interface OfferCatalog<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.ItemList<D>, RdfResource<D> {
}

export function OfferCatalogMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<OfferCatalog> & RdfResourceCore> & Base {
  @namespace(schema)
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
