import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ReviewMixin } from './Review';

export interface ClaimReview<ID extends ResourceNode = ResourceNode> extends Schema.Review<ID>, RdfResource<ID> {
  claimReviewed: string | undefined;
}

export function ClaimReviewMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ClaimReviewClass extends ReviewMixin(Resource) implements ClaimReview {
    @property.literal()
    claimReviewed: string | undefined;
  }
  return ClaimReviewClass
}

class ClaimReviewImpl extends ClaimReviewMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ClaimReview>) {
    super(arg, init)
    this.types.add(schema.ClaimReview)
  }

  static readonly __mixins: Mixin[] = [ClaimReviewMixin, ReviewMixin];
}
ClaimReviewMixin.appliesTo = schema.ClaimReview
ClaimReviewMixin.Class = ClaimReviewImpl
