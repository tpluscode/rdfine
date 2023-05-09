import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { NewsArticleMixin } from './NewsArticle.js';

export interface BackgroundNewsArticle<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.NewsArticle<D>, rdfine.RdfResource<D> {
}

export function BackgroundNewsArticleMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<BackgroundNewsArticle> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class BackgroundNewsArticleClass extends NewsArticleMixin(Resource) implements Partial<BackgroundNewsArticle> {
  }
  return BackgroundNewsArticleClass
}

class BackgroundNewsArticleImpl extends BackgroundNewsArticleMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<BackgroundNewsArticle>) {
    super(arg, init)
    this.types.add(schema.BackgroundNewsArticle)
  }

  static readonly __mixins: Mixin[] = [BackgroundNewsArticleMixin, NewsArticleMixin];
}
BackgroundNewsArticleMixin.appliesTo = schema.BackgroundNewsArticle
BackgroundNewsArticleMixin.Class = BackgroundNewsArticleImpl

export const fromPointer = createFactory<BackgroundNewsArticle>([NewsArticleMixin, BackgroundNewsArticleMixin], { types: [schema.BackgroundNewsArticle] });
