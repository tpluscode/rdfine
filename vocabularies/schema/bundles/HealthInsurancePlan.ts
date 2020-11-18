import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../lib/Intangible';
import { HealthInsurancePlanMixin } from '../lib/HealthInsurancePlan';
import { ContactPointMixin } from '../lib/ContactPoint';
import { HealthPlanFormularyMixin } from '../lib/HealthPlanFormulary';
import { HealthPlanNetworkMixin } from '../lib/HealthPlanNetwork';

export const HealthInsurancePlanBundle = [
  IntangibleMixin as Mixin,
  HealthInsurancePlanMixin as Mixin,
  ContactPointMixin as Mixin,
  HealthPlanFormularyMixin as Mixin,
  HealthPlanNetworkMixin as Mixin];
