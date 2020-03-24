import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import ArticleMixin from './Article';

export interface ScholarlyArticle extends Schema.Article, RdfResource {
}

export default function ScholarlyArticleMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ScholarlyArticleClass extends ArticleMixin(Resource) implements ScholarlyArticle {
  }
  return ScholarlyArticleClass
}

class ScholarlyArticleImpl extends ScholarlyArticleMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<ScholarlyArticle>) {
    super(arg)
    this.types.add(schema.ScholarlyArticle)
    initializeProperties(this, init)
  }
}
ScholarlyArticleMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ScholarlyArticle)
ScholarlyArticleMixin.Class = ScholarlyArticleImpl
