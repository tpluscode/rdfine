import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { DatasetMixin } from './Dataset';

export interface DataFeed<ID extends ResourceNode = ResourceNode> extends Schema.Dataset<ID>, RdfResource<ID> {
  dataFeedElement: Schema.DataFeedItem<SiblingNode<ID>> | Schema.Thing<SiblingNode<ID>> | undefined;
  dataFeedElementLiteral: string | undefined;
}

export function DataFeedMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class DataFeedClass extends DatasetMixin(Resource) implements DataFeed {
    @property.resource()
    dataFeedElement: Schema.DataFeedItem | Schema.Thing | undefined;
    @property.literal({ path: schema.dataFeedElement })
    dataFeedElementLiteral: string | undefined;
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
