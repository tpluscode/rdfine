import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ArticleMixin } from './Article';

export interface TechArticle<ID extends ResourceNode = ResourceNode> extends Schema.Article<ID>, RdfResource<ID> {
  dependencies: string | undefined;
  proficiencyLevel: string | undefined;
}

export function TechArticleMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class TechArticleClass extends ArticleMixin(Resource) implements TechArticle {
    @property.literal()
    dependencies: string | undefined;
    @property.literal()
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
