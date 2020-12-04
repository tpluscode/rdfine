import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { DataFeedMixin } from './DataFeed';

export interface CompleteDataFeed<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.DataFeed<D>, RdfResource<D> {
}

export function CompleteDataFeedMixin<Base extends Constructor>(Resource: Base): Constructor<CompleteDataFeed> & Base {
  @namespace(schema)
  class CompleteDataFeedClass extends DataFeedMixin(Resource) implements CompleteDataFeed {
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
