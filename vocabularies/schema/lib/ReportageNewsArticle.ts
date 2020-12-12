import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { NewsArticleMixin } from './NewsArticle';

export interface ReportageNewsArticle<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.NewsArticle<D>, RdfResource<D> {
}

export function ReportageNewsArticleMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<ReportageNewsArticle> & RdfResourceCore> & Base {
  @namespace(schema)
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
