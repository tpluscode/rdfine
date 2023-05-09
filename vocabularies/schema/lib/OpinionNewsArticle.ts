import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { NewsArticleMixin } from './NewsArticle.js';

export interface OpinionNewsArticle<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.NewsArticle<D>, rdfine.RdfResource<D> {
}

export function OpinionNewsArticleMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<OpinionNewsArticle> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class OpinionNewsArticleClass extends NewsArticleMixin(Resource) implements Partial<OpinionNewsArticle> {
  }
  return OpinionNewsArticleClass
}

class OpinionNewsArticleImpl extends OpinionNewsArticleMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<OpinionNewsArticle>) {
    super(arg, init)
    this.types.add(schema.OpinionNewsArticle)
  }

  static readonly __mixins: Mixin[] = [OpinionNewsArticleMixin, NewsArticleMixin];
}
OpinionNewsArticleMixin.appliesTo = schema.OpinionNewsArticle
OpinionNewsArticleMixin.Class = OpinionNewsArticleImpl

export const fromPointer = createFactory<OpinionNewsArticle>([NewsArticleMixin, OpinionNewsArticleMixin], { types: [schema.OpinionNewsArticle] });
