import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../Intangible';
import { JobPostingMixin } from '../JobPosting';
import { AdministrativeAreaMixin } from '../AdministrativeArea';
import { ContactPointMixin } from '../ContactPoint';
import { MonetaryAmountMixin } from '../MonetaryAmount';
import { PriceSpecificationMixin } from '../PriceSpecification';
import { OrganizationMixin } from '../Organization';
import { MonetaryAmountDistributionMixin } from '../MonetaryAmountDistribution';
import { PlaceMixin } from '../Place';
import { CategoryCodeMixin } from '../CategoryCode';
import { OccupationMixin } from '../Occupation';

export const JobPostingBundle = [
  IntangibleMixin as Mixin,
  JobPostingMixin as Mixin,
  AdministrativeAreaMixin as Mixin,
  ContactPointMixin as Mixin,
  MonetaryAmountMixin as Mixin,
  PriceSpecificationMixin as Mixin,
  OrganizationMixin as Mixin,
  MonetaryAmountDistributionMixin as Mixin,
  PlaceMixin as Mixin,
  CategoryCodeMixin as Mixin,
  OccupationMixin as Mixin];
