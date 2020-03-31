import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<ScholarlyArticle>) {
    super(arg, init)
    this.types.add(schema.ScholarlyArticle)
  }
}
ScholarlyArticleMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ScholarlyArticle)
ScholarlyArticleMixin.Class = ScholarlyArticleImpl
