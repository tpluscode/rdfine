import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { DatasetMixin } from './Dataset';

export interface DataFeed extends Schema.Dataset, RdfResource {
  dataFeedElement: Schema.DataFeedItem | Schema.Thing;
  dataFeedElementLiteral: string;
}

export function DataFeedMixin<Base extends Constructor>(Resource: Base) {
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

  static readonly __mixins: Mixin[] = [DataFeedMixin, DatasetMixin];
}
DataFeedMixin.appliesTo = schema.DataFeed
DataFeedMixin.Class = DataFeedImpl
