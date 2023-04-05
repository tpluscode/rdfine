import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ArticleMixin } from './Article.js';

export interface ScholarlyArticle<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Article<D>, RdfResource<D> {
}

export function ScholarlyArticleMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<ScholarlyArticle> & RdfResourceCore> & Base {
  @namespace(schema)
  class ScholarlyArticleClass extends ArticleMixin(Resource) implements Partial<ScholarlyArticle> {
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

export const fromPointer = createFactory<ScholarlyArticle>([ArticleMixin, ScholarlyArticleMixin], { types: [schema.ScholarlyArticle] });
