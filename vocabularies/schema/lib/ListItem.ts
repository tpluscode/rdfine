import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { IntangibleMixin } from './Intangible';

export interface ListItem<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Intangible<D>, RdfResource<D> {
  item: Schema.Thing<D> | undefined;
  nextItem: Schema.ListItem<D> | undefined;
  position: number | string | undefined;
  previousItem: Schema.ListItem<D> | undefined;
}

export function ListItemMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<ListItem> & RdfResourceCore> & Base {
  @namespace(schema)
  class ListItemClass extends IntangibleMixin(Resource) implements Partial<ListItem> {
    @property.resource()
    item: Schema.Thing | undefined;
    @property.resource()
    nextItem: Schema.ListItem | undefined;
    @property.literal()
    position: number | string | undefined;
    @property.resource()
    previousItem: Schema.ListItem | undefined;
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
