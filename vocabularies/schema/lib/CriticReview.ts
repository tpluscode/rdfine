import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ReviewMixin } from './Review.js';

export interface CriticReview<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Review<D>, RdfResource<D> {
}

export function CriticReviewMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<CriticReview> & RdfResourceCore> & Base {
  @namespace(schema)
  class CriticReviewClass extends ReviewMixin(Resource) implements Partial<CriticReview> {
  }
  return CriticReviewClass
}

class CriticReviewImpl extends CriticReviewMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<CriticReview>) {
    super(arg, init)
    this.types.add(schema.CriticReview)
  }

  static readonly __mixins: Mixin[] = [CriticReviewMixin, ReviewMixin];
}
CriticReviewMixin.appliesTo = schema.CriticReview
CriticReviewMixin.Class = CriticReviewImpl

export const fromPointer = createFactory<CriticReview>([ReviewMixin, CriticReviewMixin], { types: [schema.CriticReview] });
