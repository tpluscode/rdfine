import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../Intangible';
import { JobPostingMixin } from '../JobPosting';
import { MonetaryAmountMixin } from '../MonetaryAmount';
import { PriceSpecificationMixin } from '../PriceSpecification';
import { MonetaryAmountDistributionMixin } from '../MonetaryAmountDistribution';
import { OrganizationMixin } from '../Organization';
import { PlaceMixin } from '../Place';
import { OccupationMixin } from '../Occupation';

export const JobPostingBundle = [
  IntangibleMixin as Mixin,
  JobPostingMixin as Mixin,
  MonetaryAmountMixin as Mixin,
  PriceSpecificationMixin as Mixin,
  MonetaryAmountDistributionMixin as Mixin,
  OrganizationMixin as Mixin,
  PlaceMixin as Mixin,
  OccupationMixin as Mixin];
