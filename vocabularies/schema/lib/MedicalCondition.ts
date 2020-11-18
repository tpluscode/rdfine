import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { MedicalEntityMixin } from './MedicalEntity';

export interface MedicalCondition<ID extends ResourceNode = ResourceNode> extends Schema.MedicalEntity<ID>, RdfResource<ID> {
  associatedAnatomy: Schema.AnatomicalStructure<SiblingNode<ID>> | Schema.AnatomicalSystem<SiblingNode<ID>> | Schema.SuperficialAnatomy<SiblingNode<ID>> | undefined;
  differentialDiagnosis: Schema.DDxElement<SiblingNode<ID>> | undefined;
  drug: Schema.Drug<SiblingNode<ID>> | undefined;
  epidemiology: string | undefined;
  expectedPrognosis: string | undefined;
  naturalProgression: string | undefined;
  pathophysiology: string | undefined;
  possibleComplication: string | undefined;
  possibleTreatment: Schema.MedicalTherapy<SiblingNode<ID>> | undefined;
  primaryPrevention: Schema.MedicalTherapy<SiblingNode<ID>> | undefined;
  riskFactor: Schema.MedicalRiskFactor<SiblingNode<ID>> | undefined;
  secondaryPrevention: Schema.MedicalTherapy<SiblingNode<ID>> | undefined;
  signOrSymptom: Schema.MedicalSignOrSymptom<SiblingNode<ID>> | undefined;
  stage: Schema.MedicalConditionStage<SiblingNode<ID>> | undefined;
  status: string | undefined;
  statusTerm: Schema.EventStatusType | Schema.MedicalStudyStatus | undefined;
  typicalTest: Schema.MedicalTest<SiblingNode<ID>> | undefined;
}

export function MedicalConditionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MedicalConditionClass extends MedicalEntityMixin(Resource) implements MedicalCondition {
    @property.resource()
    associatedAnatomy: Schema.AnatomicalStructure | Schema.AnatomicalSystem | Schema.SuperficialAnatomy | undefined;
    @property.resource()
    differentialDiagnosis: Schema.DDxElement | undefined;
    @property.resource()
    drug: Schema.Drug | undefined;
    @property.literal()
    epidemiology: string | undefined;
    @property.literal()
    expectedPrognosis: string | undefined;
    @property.literal()
    naturalProgression: string | undefined;
    @property.literal()
    pathophysiology: string | undefined;
    @property.literal()
    possibleComplication: string | undefined;
    @property.resource()
    possibleTreatment: Schema.MedicalTherapy | undefined;
    @property.resource()
    primaryPrevention: Schema.MedicalTherapy | undefined;
    @property.resource()
    riskFactor: Schema.MedicalRiskFactor | undefined;
    @property.resource()
    secondaryPrevention: Schema.MedicalTherapy | undefined;
    @property.resource()
    signOrSymptom: Schema.MedicalSignOrSymptom | undefined;
    @property.resource()
    stage: Schema.MedicalConditionStage | undefined;
    @property.literal()
    status: string | undefined;
    @property({ path: schema.status })
    statusTerm: Schema.EventStatusType | Schema.MedicalStudyStatus | undefined;
    @property.resource()
    typicalTest: Schema.MedicalTest | undefined;
  }
  return MedicalConditionClass
}

class MedicalConditionImpl extends MedicalConditionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MedicalCondition>) {
    super(arg, init)
    this.types.add(schema.MedicalCondition)
  }

  static readonly __mixins: Mixin[] = [MedicalConditionMixin, MedicalEntityMixin];
}
MedicalConditionMixin.appliesTo = schema.MedicalCondition
MedicalConditionMixin.Class = MedicalConditionImpl
