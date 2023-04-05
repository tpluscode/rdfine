import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { MedicalRiskEstimatorMixin } from './MedicalRiskEstimator.js';

export interface MedicalRiskScore<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalRiskEstimator<D>, RdfResource<D> {
  algorithm: string | undefined;
}

export function MedicalRiskScoreMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<MedicalRiskScore> & RdfResourceCore> & Base {
  @namespace(schema)
  class MedicalRiskScoreClass extends MedicalRiskEstimatorMixin(Resource) implements Partial<MedicalRiskScore> {
    @property.literal()
    algorithm: string | undefined;
  }
  return MedicalRiskScoreClass
}

class MedicalRiskScoreImpl extends MedicalRiskScoreMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MedicalRiskScore>) {
    super(arg, init)
    this.types.add(schema.MedicalRiskScore)
  }

  static readonly __mixins: Mixin[] = [MedicalRiskScoreMixin, MedicalRiskEstimatorMixin];
}
MedicalRiskScoreMixin.appliesTo = schema.MedicalRiskScore
MedicalRiskScoreMixin.Class = MedicalRiskScoreImpl

export const fromPointer = createFactory<MedicalRiskScore>([MedicalRiskEstimatorMixin, MedicalRiskScoreMixin], { types: [schema.MedicalRiskScore] });
