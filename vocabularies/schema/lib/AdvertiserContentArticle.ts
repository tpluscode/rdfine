import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ArticleMixin } from './Article.js';

export interface AdvertiserContentArticle<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Article<D>, RdfResource<D> {
}

export function AdvertiserContentArticleMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<AdvertiserContentArticle> & RdfResourceCore> & Base {
  @namespace(schema)
  class AdvertiserContentArticleClass extends ArticleMixin(Resource) implements Partial<AdvertiserContentArticle> {
  }
  return AdvertiserContentArticleClass
}

class AdvertiserContentArticleImpl extends AdvertiserContentArticleMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AdvertiserContentArticle>) {
    super(arg, init)
    this.types.add(schema.AdvertiserContentArticle)
  }

  static readonly __mixins: Mixin[] = [AdvertiserContentArticleMixin, ArticleMixin];
}
AdvertiserContentArticleMixin.appliesTo = schema.AdvertiserContentArticle
AdvertiserContentArticleMixin.Class = AdvertiserContentArticleImpl

export const fromPointer = createFactory<AdvertiserContentArticle>([ArticleMixin, AdvertiserContentArticleMixin], { types: [schema.AdvertiserContentArticle] });
