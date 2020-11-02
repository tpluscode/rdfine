import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../Intangible';
import { HealthInsurancePlanMixin } from '../HealthInsurancePlan';
import { ContactPointMixin } from '../ContactPoint';
import { HealthPlanFormularyMixin } from '../HealthPlanFormulary';
import { HealthPlanNetworkMixin } from '../HealthPlanNetwork';

export const HealthInsurancePlanBundle = [
  IntangibleMixin as Mixin,
  HealthInsurancePlanMixin as Mixin,
  ContactPointMixin as Mixin,
  HealthPlanFormularyMixin as Mixin,
  HealthPlanNetworkMixin as Mixin];
