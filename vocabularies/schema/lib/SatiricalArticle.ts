import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ArticleMixin } from './Article';

export interface SatiricalArticle<ID extends ResourceNode = ResourceNode> extends Schema.Article<ID>, RdfResource<ID> {
}

export function SatiricalArticleMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class SatiricalArticleClass extends ArticleMixin(Resource) implements SatiricalArticle {
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
