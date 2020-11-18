import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CategoryCodeMixin } from '../lib/CategoryCode';
import { MedicalIntangibleMixin } from '../lib/MedicalIntangible';
import { MedicalCodeMixin } from '../lib/MedicalCode';

export const MedicalCodeBundle = [
  CategoryCodeMixin as Mixin,
  MedicalIntangibleMixin as Mixin,
  MedicalCodeMixin as Mixin];
