import { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import IntangibleMixin from './Intangible';

export interface ListItem extends Schema.Intangible, RdfResource {
  item: Schema.Thing;
  nextItem: Schema.ListItem;
  position: number | string;
  previousItem: Schema.ListItem;
}

export default function ListItemMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ListItemClass extends IntangibleMixin(Resource) implements ListItem {
    @property.resource()
    item!: Schema.Thing;
    @property.resource()
    nextItem!: Schema.ListItem;
    @property.literal()
    position!: number | string;
    @property.resource()
    previousItem!: Schema.ListItem;
  }
  return ListItemClass
}

class ListItemImpl extends ListItemMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ListItem>) {
    super(arg, init)
    this.types.add(schema.ListItem)
  }
}
ListItemMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ListItem)
ListItemMixin.Class = ListItemImpl
