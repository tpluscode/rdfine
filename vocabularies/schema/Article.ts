import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { CreativeWorkMixin } from './CreativeWork';

export interface Article extends Schema.CreativeWork, RdfResource {
  articleBody: string | undefined;
  articleSection: string | undefined;
  pageEnd: number | string | undefined;
  pageStart: number | string | undefined;
  pagination: string | undefined;
  speakable: Schema.SpeakableSpecification | undefined;
  wordCount: number | undefined;
}

export function ArticleMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ArticleClass extends CreativeWorkMixin(Resource) implements Article {
    @property.literal()
    articleBody: string | undefined;
    @property.literal()
    articleSection: string | undefined;
    @property.literal()
    pageEnd: number | string | undefined;
    @property.literal()
    pageStart: number | string | undefined;
    @property.literal()
    pagination: string | undefined;
    @property.resource()
    speakable: Schema.SpeakableSpecification | undefined;
    @property.literal({ type: Number })
    wordCount: number | undefined;
  }
  return ArticleClass
}

class ArticleImpl extends ArticleMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Article>) {
    super(arg, init)
    this.types.add(schema.Article)
  }

  static readonly __mixins: Mixin[] = [ArticleMixin, CreativeWorkMixin];
}
ArticleMixin.appliesTo = schema.Article
ArticleMixin.Class = ArticleImpl
