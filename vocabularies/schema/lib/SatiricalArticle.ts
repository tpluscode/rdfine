import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ArticleMixin } from './Article.js';

export interface SatiricalArticle<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Article<D>, rdfine.RdfResource<D> {
}

export function SatiricalArticleMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<SatiricalArticle> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class SatiricalArticleClass extends ArticleMixin(Resource) implements Partial<SatiricalArticle> {
  }
  return SatiricalArticleClass
}

class SatiricalArticleImpl extends SatiricalArticleMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SatiricalArticle>) {
    super(arg, init)
    this.types.add(schema.SatiricalArticle)
  }

  static readonly __mixins: Mixin[] = [SatiricalArticleMixin, ArticleMixin];
}
SatiricalArticleMixin.appliesTo = schema.SatiricalArticle
SatiricalArticleMixin.Class = SatiricalArticleImpl

export const fromPointer = createFactory<SatiricalArticle>([ArticleMixin, SatiricalArticleMixin], { types: [schema.SatiricalArticle] });
