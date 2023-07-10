import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CriticReviewMixin } from './CriticReview.js';
import { NewsArticleMixin } from './NewsArticle.js';

export interface ReviewNewsArticle<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CriticReview<D>, Schema.NewsArticle<D>, rdfine.RdfResource<D> {
}

export function ReviewNewsArticleMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<ReviewNewsArticle & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class ReviewNewsArticleClass extends NewsArticleMixin(CriticReviewMixin(Resource)) {
  }
  return ReviewNewsArticleClass as any
}

class ReviewNewsArticleImpl extends ReviewNewsArticleMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ReviewNewsArticle>) {
    super(arg, init)
    this.types.add(schema.ReviewNewsArticle)
  }

  static readonly __mixins: Mixin[] = [ReviewNewsArticleMixin, CriticReviewMixin, NewsArticleMixin];
}
ReviewNewsArticleMixin.appliesTo = schema.ReviewNewsArticle
ReviewNewsArticleMixin.Class = ReviewNewsArticleImpl

export const fromPointer = createFactory<ReviewNewsArticle>([NewsArticleMixin, CriticReviewMixin, ReviewNewsArticleMixin], { types: [schema.ReviewNewsArticle] });
