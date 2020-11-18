import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SubstanceMixin } from '../lib/Substance';
import { DrugMixin } from '../lib/Drug';
import { DrugStrengthMixin } from '../lib/DrugStrength';
import { DoseScheduleMixin } from '../lib/DoseSchedule';
import { DrugClassMixin } from '../lib/DrugClass';
import { HealthInsurancePlanMixin } from '../lib/HealthInsurancePlan';
import { DrugLegalStatusMixin } from '../lib/DrugLegalStatus';
import { OrganizationMixin } from '../lib/Organization';
import { MaximumDoseScheduleMixin } from '../lib/MaximumDoseSchedule';

export const DrugBundle = [
  SubstanceMixin as Mixin,
  DrugMixin as Mixin,
  DrugStrengthMixin as Mixin,
  DoseScheduleMixin as Mixin,
  DrugClassMixin as Mixin,
  HealthInsurancePlanMixin as Mixin,
  DrugLegalStatusMixin as Mixin,
  OrganizationMixin as Mixin,
  MaximumDoseScheduleMixin as Mixin];
