import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../lib/Intangible';
import { HealthPlanNetworkMixin } from '../lib/HealthPlanNetwork';

export const HealthPlanNetworkBundle = [
  IntangibleMixin as Mixin,
  HealthPlanNetworkMixin as Mixin];
