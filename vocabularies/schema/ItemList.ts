import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import IntangibleMixin from './Intangible';

export interface ItemList extends Schema.Intangible, RdfResource {
  itemListElement: Schema.ListItem | Schema.Thing;
  itemListElementLiteral: string;
  itemListOrder: Schema.ItemListOrderType;
  itemListOrderLiteral: string;
  numberOfItems: number;
}

export default function ItemListMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ItemListClass extends IntangibleMixin(Resource) implements ItemList {
    @property.resource()
    itemListElement!: Schema.ListItem | Schema.Thing;
    @property.literal({ path: schema.itemListElement })
    itemListElementLiteral!: string;
    @property.resource()
    itemListOrder!: Schema.ItemListOrderType;
    @property.literal({ path: schema.itemListOrder })
    itemListOrderLiteral!: string;
    @property.literal({ type: Number })
    numberOfItems!: number;
  }
  return ItemListClass
}

class ItemListImpl extends ItemListMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.ItemList)
  }
}
ItemListMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ItemList)
ItemListMixin.Class = ItemListImpl
