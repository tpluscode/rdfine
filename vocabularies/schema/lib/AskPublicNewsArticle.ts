import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { NewsArticleMixin } from './NewsArticle';

export interface AskPublicNewsArticle<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.NewsArticle<D>, RdfResource<D> {
}

export function AskPublicNewsArticleMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class AskPublicNewsArticleClass extends NewsArticleMixin(Resource) implements AskPublicNewsArticle {
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
