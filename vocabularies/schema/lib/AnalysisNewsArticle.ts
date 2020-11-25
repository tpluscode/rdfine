import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { NewsArticleMixin } from './NewsArticle';

export interface AnalysisNewsArticle<ID extends ResourceNode = ResourceNode> extends Schema.NewsArticle<ID>, RdfResource<ID> {
}

export function AnalysisNewsArticleMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class AnalysisNewsArticleClass extends NewsArticleMixin(Resource) implements AnalysisNewsArticle {
  }
  return AnalysisNewsArticleClass
}

class AnalysisNewsArticleImpl extends AnalysisNewsArticleMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AnalysisNewsArticle>) {
    super(arg, init)
    this.types.add(schema.AnalysisNewsArticle)
  }

  static readonly __mixins: Mixin[] = [AnalysisNewsArticleMixin, NewsArticleMixin];
}
AnalysisNewsArticleMixin.appliesTo = schema.AnalysisNewsArticle
AnalysisNewsArticleMixin.Class = AnalysisNewsArticleImpl
