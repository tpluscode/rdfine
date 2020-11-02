import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalIntangibleMixin } from '../MedicalIntangible';
import { DrugStrengthMixin } from '../DrugStrength';
import { AdministrativeAreaMixin } from '../AdministrativeArea';
import { MaximumDoseScheduleMixin } from '../MaximumDoseSchedule';

export const DrugStrengthBundle = [
  MedicalIntangibleMixin as Mixin,
  DrugStrengthMixin as Mixin,
  AdministrativeAreaMixin as Mixin,
  MaximumDoseScheduleMixin as Mixin];
