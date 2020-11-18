import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ArticleMixin } from './Article';

export interface NewsArticle<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Article<D>, RdfResource<D> {
  dateline: string | undefined;
  printColumn: string | undefined;
  printEdition: string | undefined;
  printPage: string | undefined;
  printSection: string | undefined;
}

export function NewsArticleMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class NewsArticleClass extends ArticleMixin(Resource) implements NewsArticle {
    @property.literal()
    dateline: string | undefined;
    @property.literal()
    printColumn: string | undefined;
    @property.literal()
    printEdition: string | undefined;
    @property.literal()
    printPage: string | undefined;
    @property.literal()
    printSection: string | undefined;
  }
  return NewsArticleClass
}

class NewsArticleImpl extends NewsArticleMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<NewsArticle>) {
    super(arg, init)
    this.types.add(schema.NewsArticle)
  }

  static readonly __mixins: Mixin[] = [NewsArticleMixin, ArticleMixin];
}
NewsArticleMixin.appliesTo = schema.NewsArticle
NewsArticleMixin.Class = NewsArticleImpl
