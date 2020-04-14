import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<ClaimReview>) {
    super(arg, init)
    this.types.add(schema.ClaimReview)
  }
}
ClaimReviewMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ClaimReview)
ClaimReviewMixin.Class = ClaimReviewImpl
