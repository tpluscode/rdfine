import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { DataFeedMixin } from './DataFeed.js';

export interface CompleteDataFeed<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.DataFeed<D>, rdfine.RdfResource<D> {
}

export function CompleteDataFeedMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<CompleteDataFeed> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class CompleteDataFeedClass extends DataFeedMixin(Resource) implements Partial<CompleteDataFeed> {
  }
  return CompleteDataFeedClass
}

class CompleteDataFeedImpl extends CompleteDataFeedMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<CompleteDataFeed>) {
    super(arg, init)
    this.types.add(schema.CompleteDataFeed)
  }

  static readonly __mixins: Mixin[] = [CompleteDataFeedMixin, DataFeedMixin];
}
CompleteDataFeedMixin.appliesTo = schema.CompleteDataFeed
CompleteDataFeedMixin.Class = CompleteDataFeedImpl

export const fromPointer = createFactory<CompleteDataFeed>([DataFeedMixin, CompleteDataFeedMixin], { types: [schema.CompleteDataFeed] });
