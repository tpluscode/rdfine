import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { AggregateRatingMixin } from './AggregateRating';

export interface EmployerAggregateRating extends Schema.AggregateRating, RdfResource {
}

export function EmployerAggregateRatingMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class EmployerAggregateRatingClass extends AggregateRatingMixin(Resource) implements EmployerAggregateRating {
  }
  return EmployerAggregateRatingClass
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
