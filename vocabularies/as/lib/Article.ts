import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { as } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '..';
import { ObjectMixin } from './Object';

export interface Article<D extends RDF.DatasetCore = RDF.DatasetCore> extends As.Object<D>, RdfResource<D> {
}

export function ArticleMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Article> & RdfResourceCore> & Base {
  @namespace(as)
  class ArticleClass extends ObjectMixin(Resource) implements Partial<Article> {
  }
  return ArticleClass
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
