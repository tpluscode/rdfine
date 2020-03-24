import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import AggregateRatingMixin from './AggregateRating';

export interface EmployerAggregateRating extends Schema.AggregateRating, RdfResource {
}

export default function EmployerAggregateRatingMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class EmployerAggregateRatingClass extends AggregateRatingMixin(Resource) implements EmployerAggregateRating {
  }
  return EmployerAggregateRatingClass
}

class EmployerAggregateRatingImpl extends EmployerAggregateRatingMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.EmployerAggregateRating)
  }
}
EmployerAggregateRatingMixin.shouldApply = (r: RdfResource) => r.types.has(schema.EmployerAggregateRating)
EmployerAggregateRatingMixin.Class = EmployerAggregateRatingImpl
