import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { MedicalRiskEstimatorMixin } from './MedicalRiskEstimator.js';

export interface MedicalRiskCalculator<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalRiskEstimator<D>, rdfine.RdfResource<D> {
}

export function MedicalRiskCalculatorMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<MedicalRiskCalculator> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class MedicalRiskCalculatorClass extends MedicalRiskEstimatorMixin(Resource) implements Partial<MedicalRiskCalculator> {
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

export const fromPointer = createFactory<MedicalRiskCalculator>([MedicalRiskEstimatorMixin, MedicalRiskCalculatorMixin], { types: [schema.MedicalRiskCalculator] });
