import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { WebPageMixin } from './WebPage';

export interface ItemPage<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.WebPage<D>, RdfResource<D> {
}

export function ItemPageMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<ItemPage> & RdfResourceCore> & Base {
  @namespace(schema)
  class ItemPageClass extends WebPageMixin(Resource) implements Partial<ItemPage> {
  }
  return ItemPageClass
}

class ItemPageImpl extends ItemPageMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ItemPage>) {
    super(arg, init)
    this.types.add(schema.ItemPage)
  }

  static readonly __mixins: Mixin[] = [ItemPageMixin, WebPageMixin];
}
ItemPageMixin.appliesTo = schema.ItemPage
ItemPageMixin.Class = ItemPageImpl

export const fromPointer = createFactory<ItemPage>([WebPageMixin, ItemPageMixin], { types: [schema.ItemPage] });
