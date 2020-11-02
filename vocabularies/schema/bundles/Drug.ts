import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SubstanceMixin } from '../Substance';
import { DrugMixin } from '../Drug';
import { DrugStrengthMixin } from '../DrugStrength';
import { DoseScheduleMixin } from '../DoseSchedule';
import { DrugClassMixin } from '../DrugClass';
import { HealthInsurancePlanMixin } from '../HealthInsurancePlan';
import { DrugLegalStatusMixin } from '../DrugLegalStatus';
import { OrganizationMixin } from '../Organization';
import { MaximumDoseScheduleMixin } from '../MaximumDoseSchedule';

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
