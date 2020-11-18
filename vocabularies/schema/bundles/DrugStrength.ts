import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalIntangibleMixin } from '../lib/MedicalIntangible';
import { DrugStrengthMixin } from '../lib/DrugStrength';
import { AdministrativeAreaMixin } from '../lib/AdministrativeArea';
import { MaximumDoseScheduleMixin } from '../lib/MaximumDoseSchedule';

export const DrugStrengthBundle = [
  MedicalIntangibleMixin as Mixin,
  DrugStrengthMixin as Mixin,
  AdministrativeAreaMixin as Mixin,
  MaximumDoseScheduleMixin as Mixin];
