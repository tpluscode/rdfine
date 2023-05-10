import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ReviewMixin } from './Review.js';

export interface Recommendation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Review<D>, rdfine.RdfResource<D> {
  category: Schema.CategoryCode<D> | Schema.Thing<D> | undefined;
  categoryLiteral: string | undefined;
}

export function RecommendationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Recommendation> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class RecommendationClass extends ReviewMixin(Resource) implements Partial<Recommendation> {
    @rdfine.property.resource()
    category: Schema.CategoryCode | Schema.Thing | undefined;
    @rdfine.property.literal({ path: schema.category })
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

export const fromPointer = createFactory<Recommendation>([ReviewMixin, RecommendationMixin], { types: [schema.Recommendation] });
