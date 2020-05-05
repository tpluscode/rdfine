import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { ArticleMixin } from './Article';

export interface TechArticle extends Schema.Article, RdfResource {
  dependencies: string;
  proficiencyLevel: string;
}

export function TechArticleMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class TechArticleClass extends ArticleMixin(Resource) implements TechArticle {
    @property.literal()
    dependencies!: string;
    @property.literal()
    proficiencyLevel!: string;
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
