import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../Intangible';
import { HealthPlanFormularyMixin } from '../HealthPlanFormulary';

export const HealthPlanFormularyBundle = [
  IntangibleMixin as Mixin,
  HealthPlanFormularyMixin as Mixin];
