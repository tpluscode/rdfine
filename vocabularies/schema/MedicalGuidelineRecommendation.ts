import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { MedicalGuidelineMixin } from './MedicalGuideline';

export interface MedicalGuidelineRecommendation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalGuideline<D>, RdfResource<D> {
  recommendationStrength: string | undefined;
}

export function MedicalGuidelineRecommendationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MedicalGuidelineRecommendationClass extends MedicalGuidelineMixin(Resource) implements MedicalGuidelineRecommendation {
    @property.literal()
    recommendationStrength: string | undefined;
  }
  return MedicalGuidelineRecommendationClass
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
