import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalEntityMixin } from '../MedicalEntity';
import { MedicalTestMixin } from '../MedicalTest';
import { DrugMixin } from '../Drug';
import { MedicalSignMixin } from '../MedicalSign';
import { MedicalConditionMixin } from '../MedicalCondition';
import { MedicalDeviceMixin } from '../MedicalDevice';

export const MedicalTestBundle = [
  MedicalEntityMixin as Mixin,
  MedicalTestMixin as Mixin,
  DrugMixin as Mixin,
  MedicalSignMixin as Mixin,
  MedicalConditionMixin as Mixin,
  MedicalDeviceMixin as Mixin];
