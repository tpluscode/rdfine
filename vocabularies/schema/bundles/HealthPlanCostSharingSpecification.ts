import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../Intangible';
import { HealthPlanCostSharingSpecificationMixin } from '../HealthPlanCostSharingSpecification';
import { PriceSpecificationMixin } from '../PriceSpecification';

export const HealthPlanCostSharingSpecificationBundle = [
  IntangibleMixin as Mixin,
  HealthPlanCostSharingSpecificationMixin as Mixin,
  PriceSpecificationMixin as Mixin];
