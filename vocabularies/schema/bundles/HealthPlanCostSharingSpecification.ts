import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../lib/Intangible';
import { HealthPlanCostSharingSpecificationMixin } from '../lib/HealthPlanCostSharingSpecification';
import { PriceSpecificationMixin } from '../lib/PriceSpecification';

export const HealthPlanCostSharingSpecificationBundle = [
  IntangibleMixin as Mixin,
  HealthPlanCostSharingSpecificationMixin as Mixin,
  PriceSpecificationMixin as Mixin];
