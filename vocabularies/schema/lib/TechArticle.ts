import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ArticleMixin } from './Article.js';

export interface TechArticle<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Article<D>, rdfine.RdfResource<D> {
  dependencies: string | undefined;
  proficiencyLevel: string | undefined;
}

export function TechArticleMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<TechArticle> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class TechArticleClass extends ArticleMixin(Resource) implements Partial<TechArticle> {
    @rdfine.property.literal()
    dependencies: string | undefined;
    @rdfine.property.literal()
    proficiencyLevel: string | undefined;
  }
  return TechArticleClass
}

class TechArticleImpl extends TechArticleMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<TechArticle>) {
    super(arg, init)
    this.types.add(schema.TechArticle)
  }

  static readonly __mixins: Mixin[] = [TechArticleMixin, ArticleMixin];
}
TechArticleMixin.appliesTo = schema.TechArticle
TechArticleMixin.Class = TechArticleImpl

export const fromPointer = createFactory<TechArticle>([ArticleMixin, TechArticleMixin], { types: [schema.TechArticle] });
