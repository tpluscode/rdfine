import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ReviewMixin } from './Review';

export interface UserReview<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Review<D>, RdfResource<D> {
}

export function UserReviewMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<UserReview> & RdfResourceCore> & Base {
  @namespace(schema)
  class UserReviewClass extends ReviewMixin(Resource) implements Partial<UserReview> {
  }
  return UserReviewClass
}

class UserReviewImpl extends UserReviewMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<UserReview>) {
    super(arg, init)
    this.types.add(schema.UserReview)
  }

  static readonly __mixins: Mixin[] = [UserReviewMixin, ReviewMixin];
}
UserReviewMixin.appliesTo = schema.UserReview
UserReviewMixin.Class = UserReviewImpl

export const fromPointer = createFactory<UserReview>([ReviewMixin, UserReviewMixin], { types: [schema.UserReview] });
