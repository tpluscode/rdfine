import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { MedicalEntityMixin } from './MedicalEntity';

export interface MedicalRiskEstimator<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalEntity<D>, RdfResource<D> {
  estimatesRiskOf: Schema.MedicalEntity<D> | undefined;
  includedRiskFactor: Schema.MedicalRiskFactor<D> | undefined;
}

export function MedicalRiskEstimatorMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<MedicalRiskEstimator> & RdfResourceCore> & Base {
  @namespace(schema)
  class MedicalRiskEstimatorClass extends MedicalEntityMixin(Resource) implements Partial<MedicalRiskEstimator> {
    @property.resource()
    estimatesRiskOf: Schema.MedicalEntity | undefined;
    @property.resource()
    includedRiskFactor: Schema.MedicalRiskFactor | undefined;
  }
  return MedicalRiskEstimatorClass
}

class MedicalRiskEstimatorImpl extends MedicalRiskEstimatorMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MedicalRiskEstimator>) {
    super(arg, init)
    this.types.add(schema.MedicalRiskEstimator)
  }

  static readonly __mixins: Mixin[] = [MedicalRiskEstimatorMixin, MedicalEntityMixin];
}
MedicalRiskEstimatorMixin.appliesTo = schema.MedicalRiskEstimator
MedicalRiskEstimatorMixin.Class = MedicalRiskEstimatorImpl

export const fromPointer = createFactory<MedicalRiskEstimator>([MedicalEntityMixin, MedicalRiskEstimatorMixin], { types: [schema.MedicalRiskEstimator] });
