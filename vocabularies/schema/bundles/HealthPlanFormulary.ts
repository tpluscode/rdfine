import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { HealthPlanFormularyMixin } from '../lib/HealthPlanFormulary';
import { IntangibleMixin } from '../lib/Intangible';

export const HealthPlanFormularyBundle = [
  HealthPlanFormularyMixin as Mixin,
  IntangibleMixin as Mixin];
