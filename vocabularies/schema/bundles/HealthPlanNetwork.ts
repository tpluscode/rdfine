import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { HealthPlanNetworkMixin } from '../lib/HealthPlanNetwork';
import { IntangibleMixin } from '../lib/Intangible';

export const HealthPlanNetworkBundle = [
  HealthPlanNetworkMixin as Mixin,
  IntangibleMixin as Mixin];
