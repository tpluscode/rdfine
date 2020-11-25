import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { MedicalRiskEstimatorMixin } from './MedicalRiskEstimator';

export interface MedicalRiskCalculator<ID extends ResourceNode = ResourceNode> extends Schema.MedicalRiskEstimator<ID>, RdfResource<ID> {
}

export function MedicalRiskCalculatorMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MedicalRiskCalculatorClass extends MedicalRiskEstimatorMixin(Resource) implements MedicalRiskCalculator {
  }
  return MedicalRiskCalculatorClass
}

class MedicalRiskCalculatorImpl extends MedicalRiskCalculatorMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MedicalRiskCalculator>) {
    super(arg, init)
    this.types.add(schema.MedicalRiskCalculator)
  }

  static readonly __mixins: Mixin[] = [MedicalRiskCalculatorMixin, MedicalRiskEstimatorMixin];
}
MedicalRiskCalculatorMixin.appliesTo = schema.MedicalRiskCalculator
MedicalRiskCalculatorMixin.Class = MedicalRiskCalculatorImpl
