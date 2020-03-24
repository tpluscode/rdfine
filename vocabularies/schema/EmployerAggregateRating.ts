import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<EmployerAggregateRating>) {
    super(arg)
    this.types.add(schema.EmployerAggregateRating)
    initializeProperties(this, init)
  }
}
EmployerAggregateRatingMixin.shouldApply = (r: RdfResource) => r.types.has(schema.EmployerAggregateRating)
EmployerAggregateRatingMixin.Class = EmployerAggregateRatingImpl
