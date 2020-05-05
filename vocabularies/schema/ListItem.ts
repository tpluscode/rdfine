import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { IntangibleMixin } from './Intangible';

export interface ListItem extends Schema.Intangible, RdfResource {
  item: Schema.Thing;
  nextItem: Schema.ListItem;
  position: number | string;
  previousItem: Schema.ListItem;
}

export function ListItemMixin<Base extends Constructor>(Resource: Base) {
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

  static readonly __mixins: Mixin[] = [ListItemMixin, IntangibleMixin];
}
ListItemMixin.appliesTo = schema.ListItem
ListItemMixin.Class = ListItemImpl
