import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { RatingMixin } from './Rating';

export interface AggregateRating extends Schema.Rating, RdfResource {
  itemReviewed: Schema.Thing;
  ratingCount: number;
  reviewCount: number;
}

export function AggregateRatingMixin<Base extends Constructor>(Resource: Base) {
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
  constructor(arg: ResourceNode, init?: Initializer<AggregateRating>) {
    super(arg, init)
    this.types.add(schema.AggregateRating)
  }

  static readonly __mixins: Mixin[] = [AggregateRatingMixin, RatingMixin];
}
AggregateRatingMixin.appliesTo = schema.AggregateRating
AggregateRatingMixin.Class = AggregateRatingImpl
