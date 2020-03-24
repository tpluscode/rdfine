import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import DatasetMixin from './Dataset';

export interface DataFeed extends Schema.Dataset, RdfResource {
  dataFeedElement: Schema.DataFeedItem | Schema.Thing;
  dataFeedElementLiteral: string;
}

export default function DataFeedMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class DataFeedClass extends DatasetMixin(Resource) implements DataFeed {
    @property.resource()
    dataFeedElement!: Schema.DataFeedItem | Schema.Thing;
    @property.literal({ path: schema.dataFeedElement })
    dataFeedElementLiteral!: string;
  }
  return DataFeedClass
}

class DataFeedImpl extends DataFeedMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<DataFeed>) {
    super(arg)
    this.types.add(schema.DataFeed)
    initializeProperties(this, init)
  }
}
DataFeedMixin.shouldApply = (r: RdfResource) => r.types.has(schema.DataFeed)
DataFeedMixin.Class = DataFeedImpl
