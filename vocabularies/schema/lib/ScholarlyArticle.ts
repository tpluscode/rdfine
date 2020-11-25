import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ArticleMixin } from './Article';

export interface ScholarlyArticle<ID extends ResourceNode = ResourceNode> extends Schema.Article<ID>, RdfResource<ID> {
}

export function ScholarlyArticleMixin<Base extends Constructor>(Resource: Base) {
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

  static readonly __mixins: Mixin[] = [ScholarlyArticleMixin, ArticleMixin];
}
ScholarlyArticleMixin.appliesTo = schema.ScholarlyArticle
ScholarlyArticleMixin.Class = ScholarlyArticleImpl
