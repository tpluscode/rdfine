import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ReviewMixin } from './Review';

export interface Recommendation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Review<D>, RdfResource<D> {
  category: Schema.Thing<D> | undefined;
  categoryLiteral: string | undefined;
}

export function RecommendationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Recommendation> & RdfResourceCore> & Base {
  @namespace(schema)
  class RecommendationClass extends ReviewMixin(Resource) implements Partial<Recommendation> {
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

export const fromPointer = createFactory<Recommendation>([ReviewMixin, RecommendationMixin], { types: [schema.Recommendation] });
