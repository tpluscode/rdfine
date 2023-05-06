import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { MedicalEntityMixin } from './MedicalEntity.js';

export interface MedicalCondition<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalEntity<D>, RdfResource<D> {
  associatedAnatomy: Schema.AnatomicalStructure<D> | Schema.AnatomicalSystem<D> | Schema.SuperficialAnatomy<D> | undefined;
  differentialDiagnosis: Schema.DDxElement<D> | undefined;
  drug: Schema.Drug<D> | undefined;
  epidemiology: string | undefined;
  expectedPrognosis: string | undefined;
  naturalProgression: string | undefined;
  pathophysiology: string | undefined;
  possibleComplication: string | undefined;
  possibleTreatment: Schema.MedicalTherapy<D> | undefined;
  primaryPrevention: Schema.MedicalTherapy<D> | undefined;
  riskFactor: Schema.MedicalRiskFactor<D> | undefined;
  secondaryPrevention: Schema.MedicalTherapy<D> | undefined;
  signOrSymptom: Schema.MedicalSignOrSymptom<D> | undefined;
  stage: Schema.MedicalConditionStage<D> | undefined;
  status: string | undefined;
  statusTerm: Schema.EventStatusType | Schema.MedicalStudyStatus | undefined;
  typicalTest: Schema.MedicalTest<D> | undefined;
}

export function MedicalConditionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<MedicalCondition> & RdfResourceCore> & Base {
  @namespace(schema)
  class MedicalConditionClass extends MedicalEntityMixin(Resource) implements Partial<MedicalCondition> {
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

export const fromPointer = createFactory<MedicalCondition>([MedicalEntityMixin, MedicalConditionMixin], { types: [schema.MedicalCondition] });
