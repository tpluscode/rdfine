import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalEntityMixin } from '../lib/MedicalEntity';
import { MedicalTestMixin } from '../lib/MedicalTest';
import { DrugMixin } from '../lib/Drug';
import { MedicalSignMixin } from '../lib/MedicalSign';
import { MedicalConditionMixin } from '../lib/MedicalCondition';
import { MedicalDeviceMixin } from '../lib/MedicalDevice';

export const MedicalTestBundle = [
  MedicalEntityMixin as Mixin,
  MedicalTestMixin as Mixin,
  DrugMixin as Mixin,
  MedicalSignMixin as Mixin,
  MedicalConditionMixin as Mixin,
  MedicalDeviceMixin as Mixin];
