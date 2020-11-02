import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CategoryCodeMixin } from '../CategoryCode';
import { MedicalIntangibleMixin } from '../MedicalIntangible';
import { MedicalCodeMixin } from '../MedicalCode';

export const MedicalCodeBundle = [
  CategoryCodeMixin as Mixin,
  MedicalIntangibleMixin as Mixin,
  MedicalCodeMixin as Mixin];
