import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CreativeWorkMixin } from './CreativeWork.js';

export interface Article<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, rdfine.RdfResource<D> {
  articleBody: string | undefined;
  articleSection: string | undefined;
  backstory: Schema.CreativeWork<D> | undefined;
  backstoryLiteral: string | undefined;
  pageEnd: number | string | undefined;
  pageStart: number | string | undefined;
  pagination: string | undefined;
  speakable: Schema.SpeakableSpecification<D> | undefined;
  wordCount: number | undefined;
}

export function ArticleMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Article & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class ArticleClass extends CreativeWorkMixin(Resource) {
    @rdfine.property.literal()
    articleBody: string | undefined;
    @rdfine.property.literal()
    articleSection: string | undefined;
    @rdfine.property.resource()
    backstory: Schema.CreativeWork | undefined;
    @rdfine.property.literal({ path: schema.backstory })
    backstoryLiteral: string | undefined;
    @rdfine.property.literal()
    pageEnd: number | string | undefined;
    @rdfine.property.literal()
    pageStart: number | string | undefined;
    @rdfine.property.literal()
    pagination: string | undefined;
    @rdfine.property.resource()
    speakable: Schema.SpeakableSpecification | undefined;
    @rdfine.property.literal({ type: Number })
    wordCount: number | undefined;
  }
  return ArticleClass as any
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

export const fromPointer = createFactory<Article>([CreativeWorkMixin, ArticleMixin], { types: [schema.Article] });
