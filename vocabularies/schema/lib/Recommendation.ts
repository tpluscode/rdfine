import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ReviewMixin } from './Review';

export interface Recommendation<ID extends ResourceNode = ResourceNode> extends Schema.Review<ID>, RdfResource<ID> {
  category: Schema.Thing<SiblingNode<ID>> | undefined;
  categoryLiteral: string | undefined;
}

export function RecommendationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class RecommendationClass extends ReviewMixin(Resource) implements Recommendation {
    @property.resource()
    category: Schema.Thing | undefined;
    @property.literal({ path: schema.category })
    categoryLiteral: string | undefined;
  }
  return RecommendationClass
}

class RecommendationImpl extends RecommendationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Recommendation>) {
    super(arg, init)
    this.types.add(schema.Recommendation)
  }

  static readonly __mixins: Mixin[] = [RecommendationMixin, ReviewMixin];
}
RecommendationMixin.appliesTo = schema.Recommendation
RecommendationMixin.Class = RecommendationImpl
