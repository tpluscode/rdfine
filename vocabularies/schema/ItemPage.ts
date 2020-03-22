import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.ItemPage)
  }
}
ItemPageMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ItemPage)
ItemPageMixin.Class = ItemPageImpl
