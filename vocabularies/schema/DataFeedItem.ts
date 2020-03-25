import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import IntangibleMixin from './Intangible';

export interface DataFeedItem extends Schema.Intangible, RdfResource {
  dateCreated: Date | Date;
  dateDeleted: Date | Date;
  dateModified: Date | Date;
  item: Schema.Thing;
}

export default function DataFeedItemMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class DataFeedItemClass extends IntangibleMixin(Resource) implements DataFeedItem {
    @property.literal()
    dateCreated!: Date | Date;
    @property.literal()
    dateDeleted!: Date | Date;
    @property.literal()
    dateModified!: Date | Date;
    @property.resource()
    item!: Schema.Thing;
  }
  return DataFeedItemClass
}

class DataFeedItemImpl extends DataFeedItemMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<DataFeedItem>) {
    super(arg)
    this.types.add(schema.DataFeedItem)
    initializeProperties<DataFeedItem>(this, init)
  }
}
DataFeedItemMixin.shouldApply = (r: RdfResource) => r.types.has(schema.DataFeedItem)
DataFeedItemMixin.Class = DataFeedItemImpl
