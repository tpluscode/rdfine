import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<Review>) {
    super(arg)
    this.types.add(schema.Review)
    initializeProperties(this, init)
  }
}
ReviewMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Review)
ReviewMixin.Class = ReviewImpl
