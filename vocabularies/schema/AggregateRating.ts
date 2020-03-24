import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import RatingMixin from './Rating';

export interface AggregateRating extends Schema.Rating, RdfResource {
  itemReviewed: Schema.Thing;
  ratingCount: number;
  reviewCount: number;
}

export default function AggregateRatingMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class AggregateRatingClass extends RatingMixin(Resource) implements AggregateRating {
    @property.resource()
    itemReviewed!: Schema.Thing;
    @property.literal({ type: Number })
    ratingCount!: number;
    @property.literal({ type: Number })
    reviewCount!: number;
  }
  return AggregateRatingClass
}

class AggregateRatingImpl extends AggregateRatingMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<AggregateRating>) {
    super(arg)
    this.types.add(schema.AggregateRating)
    initializeProperties(this, init)
  }
}
AggregateRatingMixin.shouldApply = (r: RdfResource) => r.types.has(schema.AggregateRating)
AggregateRatingMixin.Class = AggregateRatingImpl
