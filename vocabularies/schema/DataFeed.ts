import { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<DataFeed>) {
    super(arg, init)
    this.types.add(schema.DataFeed)
  }
}
DataFeedMixin.shouldApply = (r: RdfResource) => r.types.has(schema.DataFeed)
DataFeedMixin.Class = DataFeedImpl
