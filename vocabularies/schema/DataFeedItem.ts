import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.DataFeedItem)
  }
}
DataFeedItemMixin.shouldApply = (r: RdfResource) => r.types.has(schema.DataFeedItem)
DataFeedItemMixin.Class = DataFeedItemImpl
