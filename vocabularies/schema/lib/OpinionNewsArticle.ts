import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { NewsArticleMixin } from './NewsArticle';

export interface OpinionNewsArticle<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.NewsArticle<D>, RdfResource<D> {
}

export function OpinionNewsArticleMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class OpinionNewsArticleClass extends NewsArticleMixin(Resource) implements OpinionNewsArticle {
  }
  return OpinionNewsArticleClass
}

class OpinionNewsArticleImpl extends OpinionNewsArticleMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<OpinionNewsArticle>) {
    super(arg, init)
    this.types.add(schema.OpinionNewsArticle)
  }

  static readonly __mixins: Mixin[] = [OpinionNewsArticleMixin, NewsArticleMixin];
}
OpinionNewsArticleMixin.appliesTo = schema.OpinionNewsArticle
OpinionNewsArticleMixin.Class = OpinionNewsArticleImpl
