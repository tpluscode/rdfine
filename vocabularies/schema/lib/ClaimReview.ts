import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ReviewMixin } from './Review.js';

export interface ClaimReview<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Review<D>, rdfine.RdfResource<D> {
  claimReviewed: string | undefined;
}

export function ClaimReviewMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<ClaimReview> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class ClaimReviewClass extends ReviewMixin(Resource) implements Partial<ClaimReview> {
    @rdfine.property.literal()
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

export const fromPointer = createFactory<ClaimReview>([ReviewMixin, ClaimReviewMixin], { types: [schema.ClaimReview] });
