import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { NewsArticleMixin } from './NewsArticle.js';

export interface AnalysisNewsArticle<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.NewsArticle<D>, rdfine.RdfResource<D> {
}

export function AnalysisNewsArticleMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<AnalysisNewsArticle & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class AnalysisNewsArticleClass extends NewsArticleMixin(Resource) {
  }
  return AnalysisNewsArticleClass as any
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

export const fromPointer = createFactory<AnalysisNewsArticle>([NewsArticleMixin, AnalysisNewsArticleMixin], { types: [schema.AnalysisNewsArticle] });
