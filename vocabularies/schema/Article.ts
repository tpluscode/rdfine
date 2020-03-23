import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import CreativeWorkMixin from './CreativeWork';

export interface Article extends Schema.CreativeWork, RdfResource {
  articleBody: string;
  articleSection: string;
  pageEnd: number | string;
  pageStart: number | string;
  pagination: string;
  speakable: Schema.SpeakableSpecification;
  speakableLiteral: string;
  wordCount: number;
}

export default function ArticleMixin<Base extends Constructor>(Resource: Base) {
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
    @property.literal({ path: schema.speakable })
    speakableLiteral!: string;
    @property.literal({ type: Number })
    wordCount!: number;
  }
  return ArticleClass
}

class ArticleImpl extends ArticleMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.Article)
  }
}
ArticleMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Article)
ArticleMixin.Class = ArticleImpl
