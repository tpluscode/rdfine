import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import IntangibleMixin from './Intangible';

export interface ListItem extends Schema.Intangible, RdfResource {
  item: Schema.Thing;
  nextItem: ListItem;
  position: number | string;
  previousItem: ListItem;
}

export default function ListItemMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ListItemClass extends IntangibleMixin(Resource) implements ListItem {
    @property.resource()
    item!: Schema.Thing;
    @property.resource()
    nextItem!: ListItem;
    @property.literal()
    position!: number | string;
    @property.resource()
    previousItem!: ListItem;
  }
  return ListItemClass
}

class ListItemImpl extends ListItemMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.ListItem)
  }
}
ListItemMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ListItem)
ListItemMixin.Class = ListItemImpl
