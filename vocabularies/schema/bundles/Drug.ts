import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DoseScheduleMixin } from '../lib/DoseSchedule';
import { DrugClassMixin } from '../lib/DrugClass';
import { DrugLegalStatusMixin } from '../lib/DrugLegalStatus';
import { DrugMixin } from '../lib/Drug';
import { DrugStrengthMixin } from '../lib/DrugStrength';
import { HealthInsurancePlanMixin } from '../lib/HealthInsurancePlan';
import { MaximumDoseScheduleMixin } from '../lib/MaximumDoseSchedule';
import { OrganizationMixin } from '../lib/Organization';
import { SubstanceMixin } from '../lib/Substance';

export const DrugBundle = [
  DoseScheduleMixin as Mixin,
  DrugClassMixin as Mixin,
  DrugLegalStatusMixin as Mixin,
  DrugMixin as Mixin,
  DrugStrengthMixin as Mixin,
  HealthInsurancePlanMixin as Mixin,
  MaximumDoseScheduleMixin as Mixin,
  OrganizationMixin as Mixin,
  SubstanceMixin as Mixin];
