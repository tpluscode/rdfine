import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { AggregateRatingMixin } from './AggregateRating.js';

export interface EmployerAggregateRating<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.AggregateRating<D>, rdfine.RdfResource<D> {
}

export function EmployerAggregateRatingMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<EmployerAggregateRating & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class EmployerAggregateRatingClass extends AggregateRatingMixin(Resource) {
  }
  return EmployerAggregateRatingClass as any
}

class EmployerAggregateRatingImpl extends EmployerAggregateRatingMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<EmployerAggregateRating>) {
    super(arg, init)
    this.types.add(schema.EmployerAggregateRating)
  }

  static readonly __mixins: Mixin[] = [EmployerAggregateRatingMixin, AggregateRatingMixin];
}
EmployerAggregateRatingMixin.appliesTo = schema.EmployerAggregateRating
EmployerAggregateRatingMixin.Class = EmployerAggregateRatingImpl

export const fromPointer = createFactory<EmployerAggregateRating>([AggregateRatingMixin, EmployerAggregateRatingMixin], { types: [schema.EmployerAggregateRating] });
