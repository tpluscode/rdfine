import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../lib/Intangible';
import { HealthPlanFormularyMixin } from '../lib/HealthPlanFormulary';

export const HealthPlanFormularyBundle = [
  IntangibleMixin as Mixin,
  HealthPlanFormularyMixin as Mixin];
