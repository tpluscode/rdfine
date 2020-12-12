import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ReviewMixin } from './Review';

export interface ClaimReview<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Review<D>, RdfResource<D> {
  claimReviewed: string | undefined;
}

export function ClaimReviewMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<ClaimReview> & RdfResourceCore> & Base {
  @namespace(schema)
  class ClaimReviewClass extends ReviewMixin(Resource) implements Partial<ClaimReview> {
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

export const fromPointer = createFactory<ClaimReview>([ReviewMixin, ClaimReviewMixin], { types: [schema.ClaimReview] });
