import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../Intangible';
import { HealthPlanNetworkMixin } from '../HealthPlanNetwork';

export const HealthPlanNetworkBundle = [
  IntangibleMixin as Mixin,
  HealthPlanNetworkMixin as Mixin];
