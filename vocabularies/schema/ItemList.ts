import { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import IntangibleMixin from './Intangible';

export interface ItemList extends Schema.Intangible, RdfResource {
  itemListElement: Schema.ListItem | Schema.Thing;
  itemListElementLiteral: string;
  itemListOrder: string;
  itemListOrderTerm: Schema.ItemListOrderType;
  numberOfItems: number;
}

export default function ItemListMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ItemListClass extends IntangibleMixin(Resource) implements ItemList {
    @property.resource()
    itemListElement!: Schema.ListItem | Schema.Thing;
    @property.literal({ path: schema.itemListElement })
    itemListElementLiteral!: string;
    @property.literal()
    itemListOrder!: string;
    @property({ path: schema.itemListOrder })
    itemListOrderTerm!: Schema.ItemListOrderType;
    @property.literal({ type: Number })
    numberOfItems!: number;
  }
  return ItemListClass
}

class ItemListImpl extends ItemListMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ItemList>) {
    super(arg, init)
    this.types.add(schema.ItemList)
  }
}
ItemListMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ItemList)
ItemListMixin.Class = ItemListImpl
