import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { HealthPlanCostSharingSpecificationMixin } from '../lib/HealthPlanCostSharingSpecification';
import { IntangibleMixin } from '../lib/Intangible';
import { PriceSpecificationMixin } from '../lib/PriceSpecification';

export const HealthPlanCostSharingSpecificationBundle = [
  HealthPlanCostSharingSpecificationMixin as Mixin,
  IntangibleMixin as Mixin,
  PriceSpecificationMixin as Mixin];
