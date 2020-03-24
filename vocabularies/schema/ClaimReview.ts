import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import ReviewMixin from './Review';

export interface ClaimReview extends Schema.Review, RdfResource {
  claimReviewed: string;
}

export default function ClaimReviewMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ClaimReviewClass extends ReviewMixin(Resource) implements ClaimReview {
    @property.literal()
    claimReviewed!: string;
  }
  return ClaimReviewClass
}

class ClaimReviewImpl extends ClaimReviewMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<ClaimReview>) {
    super(arg)
    this.types.add(schema.ClaimReview)
    initializeProperties(this, init)
  }
}
ClaimReviewMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ClaimReview)
ClaimReviewMixin.Class = ClaimReviewImpl
