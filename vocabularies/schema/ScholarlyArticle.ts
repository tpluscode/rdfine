import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.ScholarlyArticle)
  }
}
ScholarlyArticleMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ScholarlyArticle)
ScholarlyArticleMixin.Class = ScholarlyArticleImpl
