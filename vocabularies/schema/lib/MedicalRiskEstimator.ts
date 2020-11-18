import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { MedicalEntityMixin } from './MedicalEntity';

export interface MedicalRiskEstimator<ID extends ResourceNode = ResourceNode> extends Schema.MedicalEntity<ID>, RdfResource<ID> {
  estimatesRiskOf: Schema.MedicalEntity<SiblingNode<ID>> | undefined;
  includedRiskFactor: Schema.MedicalRiskFactor<SiblingNode<ID>> | undefined;
}

export function MedicalRiskEstimatorMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MedicalRiskEstimatorClass extends MedicalEntityMixin(Resource) implements MedicalRiskEstimator {
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
