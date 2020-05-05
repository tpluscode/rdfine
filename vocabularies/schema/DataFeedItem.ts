import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { IntangibleMixin } from './Intangible';

export interface DataFeedItem extends Schema.Intangible, RdfResource {
  dateCreated: Date;
  dateDeleted: Date;
  dateModified: Date;
  item: Schema.Thing;
}

export function DataFeedItemMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class DataFeedItemClass extends IntangibleMixin(Resource) implements DataFeedItem {
    @property.literal()
    dateCreated!: Date;
    @property.literal()
    dateDeleted!: Date;
    @property.literal()
    dateModified!: Date;
    @property.resource()
    item!: Schema.Thing;
  }
  return DataFeedItemClass
}

class DataFeedItemImpl extends DataFeedItemMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<DataFeedItem>) {
    super(arg, init)
    this.types.add(schema.DataFeedItem)
  }

  static readonly __mixins: Mixin[] = [DataFeedItemMixin, IntangibleMixin];
}
DataFeedItemMixin.appliesTo = schema.DataFeedItem
DataFeedItemMixin.Class = DataFeedItemImpl
