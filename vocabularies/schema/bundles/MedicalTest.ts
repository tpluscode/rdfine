import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DrugMixin } from '../lib/Drug';
import { MedicalConditionMixin } from '../lib/MedicalCondition';
import { MedicalDeviceMixin } from '../lib/MedicalDevice';
import { MedicalEntityMixin } from '../lib/MedicalEntity';
import { MedicalSignMixin } from '../lib/MedicalSign';
import { MedicalTestMixin } from '../lib/MedicalTest';

export const MedicalTestBundle = [
  DrugMixin as Mixin,
  MedicalConditionMixin as Mixin,
  MedicalDeviceMixin as Mixin,
  MedicalEntityMixin as Mixin,
  MedicalSignMixin as Mixin,
  MedicalTestMixin as Mixin];
