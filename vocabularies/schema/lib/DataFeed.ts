import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { DatasetMixin } from './Dataset';

export interface DataFeed<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Dataset<D>, RdfResource<D> {
  dataFeedElement: Schema.DataFeedItem<D> | Schema.Thing<D> | undefined;
  dataFeedElementLiteral: string | undefined;
}

export function DataFeedMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<DataFeed> & RdfResourceCore> & Base {
  @namespace(schema)
  class DataFeedClass extends DatasetMixin(Resource) implements Partial<DataFeed> {
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

export const fromPointer = createFactory<DataFeed>([DatasetMixin, DataFeedMixin], { types: [schema.DataFeed] });
