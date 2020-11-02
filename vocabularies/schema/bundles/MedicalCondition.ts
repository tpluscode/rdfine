import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalEntityMixin } from '../MedicalEntity';
import { MedicalConditionMixin } from '../MedicalCondition';
import { AnatomicalStructureMixin } from '../AnatomicalStructure';
import { AnatomicalSystemMixin } from '../AnatomicalSystem';
import { SuperficialAnatomyMixin } from '../SuperficialAnatomy';
import { DDxElementMixin } from '../DDxElement';
import { DrugMixin } from '../Drug';
import { MedicalTherapyMixin } from '../MedicalTherapy';
import { MedicalRiskFactorMixin } from '../MedicalRiskFactor';
import { MedicalSignOrSymptomMixin } from '../MedicalSignOrSymptom';
import { MedicalConditionStageMixin } from '../MedicalConditionStage';
import { MedicalTestMixin } from '../MedicalTest';

export const MedicalConditionBundle = [
  MedicalEntityMixin as Mixin,
  MedicalConditionMixin as Mixin,
  AnatomicalStructureMixin as Mixin,
  AnatomicalSystemMixin as Mixin,
  SuperficialAnatomyMixin as Mixin,
  DDxElementMixin as Mixin,
  DrugMixin as Mixin,
  MedicalTherapyMixin as Mixin,
  MedicalRiskFactorMixin as Mixin,
  MedicalSignOrSymptomMixin as Mixin,
  MedicalConditionStageMixin as Mixin,
  MedicalTestMixin as Mixin];
