import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AdministrativeAreaMixin } from '../lib/AdministrativeArea';
import { DrugStrengthMixin } from '../lib/DrugStrength';
import { MaximumDoseScheduleMixin } from '../lib/MaximumDoseSchedule';
import { MedicalIntangibleMixin } from '../lib/MedicalIntangible';

export const DrugStrengthBundle = [
  AdministrativeAreaMixin as Mixin,
  DrugStrengthMixin as Mixin,
  MaximumDoseScheduleMixin as Mixin,
  MedicalIntangibleMixin as Mixin];
