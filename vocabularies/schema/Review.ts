import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import CreativeWorkMixin from './CreativeWork';

export interface Review extends Schema.CreativeWork, RdfResource {
  itemReviewed: Schema.Thing;
  reviewAspect: string;
  reviewBody: string;
  reviewRating: Schema.Rating;
}

export default function ReviewMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ReviewClass extends CreativeWorkMixin(Resource) implements Review {
    @property.resource()
    itemReviewed!: Schema.Thing;
    @property.literal()
    reviewAspect!: string;
    @property.literal()
    reviewBody!: string;
    @property.resource()
    reviewRating!: Schema.Rating;
  }
  return ReviewClass
}

class ReviewImpl extends ReviewMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.Review)
  }
}
ReviewMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Review)
ReviewMixin.Class = ReviewImpl
