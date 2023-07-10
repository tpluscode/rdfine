import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { NewsArticleMixin } from './NewsArticle.js';

export interface AskPublicNewsArticle<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.NewsArticle<D>, rdfine.RdfResource<D> {
}

export function AskPublicNewsArticleMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<AskPublicNewsArticle & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class AskPublicNewsArticleClass extends NewsArticleMixin(Resource) {
  }
  return AskPublicNewsArticleClass as any
}

class AskPublicNewsArticleImpl extends AskPublicNewsArticleMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AskPublicNewsArticle>) {
    super(arg, init)
    this.types.add(schema.AskPublicNewsArticle)
  }

  static readonly __mixins: Mixin[] = [AskPublicNewsArticleMixin, NewsArticleMixin];
}
AskPublicNewsArticleMixin.appliesTo = schema.AskPublicNewsArticle
AskPublicNewsArticleMixin.Class = AskPublicNewsArticleImpl

export const fromPointer = createFactory<AskPublicNewsArticle>([NewsArticleMixin, AskPublicNewsArticleMixin], { types: [schema.AskPublicNewsArticle] });
