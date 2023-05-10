import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { NewsArticleMixin } from './NewsArticle.js';

export interface ReportageNewsArticle<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.NewsArticle<D>, rdfine.RdfResource<D> {
}

export function ReportageNewsArticleMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<ReportageNewsArticle> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class ReportageNewsArticleClass extends NewsArticleMixin(Resource) implements Partial<ReportageNewsArticle> {
  }
  return ReportageNewsArticleClass
}

class ReportageNewsArticleImpl extends ReportageNewsArticleMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ReportageNewsArticle>) {
    super(arg, init)
    this.types.add(schema.ReportageNewsArticle)
  }

  static readonly __mixins: Mixin[] = [ReportageNewsArticleMixin, NewsArticleMixin];
}
ReportageNewsArticleMixin.appliesTo = schema.ReportageNewsArticle
ReportageNewsArticleMixin.Class = ReportageNewsArticleImpl

export const fromPointer = createFactory<ReportageNewsArticle>([NewsArticleMixin, ReportageNewsArticleMixin], { types: [schema.ReportageNewsArticle] });
