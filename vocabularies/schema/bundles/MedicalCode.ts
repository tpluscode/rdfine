import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CategoryCodeMixin } from '../lib/CategoryCode';
import { MedicalCodeMixin } from '../lib/MedicalCode';
import { MedicalIntangibleMixin } from '../lib/MedicalIntangible';

export const MedicalCodeBundle = [
  CategoryCodeMixin as Mixin,
  MedicalCodeMixin as Mixin,
  MedicalIntangibleMixin as Mixin];
