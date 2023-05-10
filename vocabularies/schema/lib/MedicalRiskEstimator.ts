import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { MedicalEntityMixin } from './MedicalEntity.js';

export interface MedicalRiskEstimator<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalEntity<D>, rdfine.RdfResource<D> {
  estimatesRiskOf: Schema.MedicalEntity<D> | undefined;
  includedRiskFactor: Schema.MedicalRiskFactor<D> | undefined;
}

export function MedicalRiskEstimatorMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<MedicalRiskEstimator> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class MedicalRiskEstimatorClass extends MedicalEntityMixin(Resource) implements Partial<MedicalRiskEstimator> {
    @rdfine.property.resource()
    estimatesRiskOf: Schema.MedicalEntity | undefined;
    @rdfine.property.resource()
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
