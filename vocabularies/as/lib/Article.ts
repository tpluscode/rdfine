import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { as } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '../index.js';
import { ObjectMixin } from './Object.js';

export interface Article<D extends RDF.DatasetCore = RDF.DatasetCore> extends As.Object<D>, rdfine.RdfResource<D> {
}

export function ArticleMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Article & RdfResourceCore> & Base {
  @rdfine.namespace(as)
  class ArticleClass extends ObjectMixin(Resource) {
  }
  return ArticleClass as any
}

class ArticleImpl extends ArticleMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Article>) {
    super(arg, init)
    this.types.add(as.Article)
  }

  static readonly __mixins: Mixin[] = [ArticleMixin, ObjectMixin];
}
ArticleMixin.appliesTo = as.Article
ArticleMixin.Class = ArticleImpl

export const fromPointer = createFactory<Article>([ObjectMixin, ArticleMixin], { types: [as.Article] });
