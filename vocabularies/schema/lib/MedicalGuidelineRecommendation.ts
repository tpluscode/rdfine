import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { MedicalGuidelineMixin } from './MedicalGuideline.js';

export interface MedicalGuidelineRecommendation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalGuideline<D>, rdfine.RdfResource<D> {
  recommendationStrength: string | undefined;
}

export function MedicalGuidelineRecommendationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<MedicalGuidelineRecommendation & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class MedicalGuidelineRecommendationClass extends MedicalGuidelineMixin(Resource) {
    @rdfine.property.literal()
    recommendationStrength: string | undefined;
  }
  return MedicalGuidelineRecommendationClass as any
}

class MedicalGuidelineRecommendationImpl extends MedicalGuidelineRecommendationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MedicalGuidelineRecommendation>) {
    super(arg, init)
    this.types.add(schema.MedicalGuidelineRecommendation)
  }

  static readonly __mixins: Mixin[] = [MedicalGuidelineRecommendationMixin, MedicalGuidelineMixin];
}
MedicalGuidelineRecommendationMixin.appliesTo = schema.MedicalGuidelineRecommendation
MedicalGuidelineRecommendationMixin.Class = MedicalGuidelineRecommendationImpl

export const fromPointer = createFactory<MedicalGuidelineRecommendation>([MedicalGuidelineMixin, MedicalGuidelineRecommendationMixin], { types: [schema.MedicalGuidelineRecommendation] });
