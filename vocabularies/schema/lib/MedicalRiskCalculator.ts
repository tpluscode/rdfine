import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { MedicalRiskEstimatorMixin } from './MedicalRiskEstimator';

export interface MedicalRiskCalculator<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalRiskEstimator<D>, RdfResource<D> {
}

export function MedicalRiskCalculatorMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<MedicalRiskCalculator> & RdfResourceCore> & Base {
  @namespace(schema)
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
