import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CriticReviewMixin } from './CriticReview';
import { NewsArticleMixin } from './NewsArticle';

export interface ReviewNewsArticle<ID extends ResourceNode = ResourceNode> extends Schema.CriticReview<ID>, Schema.NewsArticle<ID>, RdfResource<ID> {
}

export function ReviewNewsArticleMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ReviewNewsArticleClass extends NewsArticleMixin(CriticReviewMixin(Resource)) implements ReviewNewsArticle {
  }
  return ReviewNewsArticleClass
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
