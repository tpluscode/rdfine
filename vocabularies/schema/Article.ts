import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { CreativeWorkMixin } from './CreativeWork';

export interface Article extends Schema.CreativeWork, RdfResource {
  articleBody: string;
  articleSection: string;
  pageEnd: number | string;
  pageStart: number | string;
  pagination: string;
  speakable: Schema.SpeakableSpecification;
  wordCount: number;
}

export function ArticleMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ArticleClass extends CreativeWorkMixin(Resource) implements Article {
    @property.literal()
    articleBody!: string;
    @property.literal()
    articleSection!: string;
    @property.literal()
    pageEnd!: number | string;
    @property.literal()
    pageStart!: number | string;
    @property.literal()
    pagination!: string;
    @property.resource()
    speakable!: Schema.SpeakableSpecification;
    @property.literal({ type: Number })
    wordCount!: number;
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
