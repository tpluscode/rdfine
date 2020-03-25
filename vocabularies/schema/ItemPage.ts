import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import WebPageMixin from './WebPage';

export interface ItemPage extends Schema.WebPage, RdfResource {
}

export default function ItemPageMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ItemPageClass extends WebPageMixin(Resource) implements ItemPage {
  }
  return ItemPageClass
}

class ItemPageImpl extends ItemPageMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ItemPage>) {
    super(arg, init)
    this.types.add(schema.ItemPage)
  }
}
ItemPageMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ItemPage)
ItemPageMixin.Class = ItemPageImpl
