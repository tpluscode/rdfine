import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { WebPageMixin } from './WebPage.js';

export interface ItemPage<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.WebPage<D>, rdfine.RdfResource<D> {
}

export function ItemPageMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<ItemPage> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
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
