import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<ItemPage>) {
    super(arg)
    this.types.add(schema.ItemPage)
    initializeProperties(this, init)
  }
}
ItemPageMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ItemPage)
ItemPageMixin.Class = ItemPageImpl
