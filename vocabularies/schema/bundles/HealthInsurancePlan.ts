import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ContactPointMixin } from '../lib/ContactPoint';
import { HealthInsurancePlanMixin } from '../lib/HealthInsurancePlan';
import { HealthPlanFormularyMixin } from '../lib/HealthPlanFormulary';
import { HealthPlanNetworkMixin } from '../lib/HealthPlanNetwork';
import { IntangibleMixin } from '../lib/Intangible';

export const HealthInsurancePlanBundle = [
  ContactPointMixin as Mixin,
  HealthInsurancePlanMixin as Mixin,
  HealthPlanFormularyMixin as Mixin,
  HealthPlanNetworkMixin as Mixin,
  IntangibleMixin as Mixin];
