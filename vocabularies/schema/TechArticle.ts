import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import ArticleMixin from './Article';

export interface TechArticle extends Schema.Article, RdfResource {
  dependencies: string;
  proficiencyLevel: string;
}

export default function TechArticleMixin<Base extends Constructor>(Resource: Base) {
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<TechArticle>) {
    super(arg)
    this.types.add(schema.TechArticle)
    initializeProperties<TechArticle>(this, init)
  }
}
TechArticleMixin.shouldApply = (r: RdfResource) => r.types.has(schema.TechArticle)
TechArticleMixin.Class = TechArticleImpl
