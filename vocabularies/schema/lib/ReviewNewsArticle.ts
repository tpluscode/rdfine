import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { NewsArticleMixin } from './NewsArticle';
import { CriticReviewMixin } from './CriticReview';

export interface ReviewNewsArticle<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.NewsArticle<D>, Schema.CriticReview<D>, RdfResource<D> {
}

export function ReviewNewsArticleMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<ReviewNewsArticle> & RdfResourceCore> & Base {
  @namespace(schema)
  class ReviewNewsArticleClass extends CriticReviewMixin(NewsArticleMixin(Resource)) implements Partial<ReviewNewsArticle> {
  }
  return ReviewNewsArticleClass
}

class ReviewNewsArticleImpl extends ReviewNewsArticleMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ReviewNewsArticle>) {
    super(arg, init)
    this.types.add(schema.ReviewNewsArticle)
  }

  static readonly __mixins: Mixin[] = [ReviewNewsArticleMixin, NewsArticleMixin, CriticReviewMixin];
}
ReviewNewsArticleMixin.appliesTo = schema.ReviewNewsArticle
ReviewNewsArticleMixin.Class = ReviewNewsArticleImpl

export const fromPointer = createFactory<ReviewNewsArticle>([CriticReviewMixin, NewsArticleMixin, ReviewNewsArticleMixin], { types: [schema.ReviewNewsArticle] });
