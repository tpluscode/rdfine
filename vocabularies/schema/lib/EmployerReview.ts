import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ReviewMixin } from './Review.js';

export interface EmployerReview<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Review<D>, rdfine.RdfResource<D> {
}

export function EmployerReviewMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<EmployerReview> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class EmployerReviewClass extends ReviewMixin(Resource) implements Partial<EmployerReview> {
  }
  return EmployerReviewClass
}

class EmployerReviewImpl extends EmployerReviewMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<EmployerReview>) {
    super(arg, init)
    this.types.add(schema.EmployerReview)
  }

  static readonly __mixins: Mixin[] = [EmployerReviewMixin, ReviewMixin];
}
EmployerReviewMixin.appliesTo = schema.EmployerReview
EmployerReviewMixin.Class = EmployerReviewImpl

export const fromPointer = createFactory<EmployerReview>([ReviewMixin, EmployerReviewMixin], { types: [schema.EmployerReview] });
