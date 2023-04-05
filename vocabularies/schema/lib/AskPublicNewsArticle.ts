import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { NewsArticleMixin } from './NewsArticle.js';

export interface AskPublicNewsArticle<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.NewsArticle<D>, RdfResource<D> {
}

export function AskPublicNewsArticleMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<AskPublicNewsArticle> & RdfResourceCore> & Base {
  @namespace(schema)
  class AskPublicNewsArticleClass extends NewsArticleMixin(Resource) implements Partial<AskPublicNewsArticle> {
  }
  return AskPublicNewsArticleClass
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
