import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AdministrativeAreaMixin } from '../lib/AdministrativeArea';
import { CategoryCodeMixin } from '../lib/CategoryCode';
import { ContactPointMixin } from '../lib/ContactPoint';
import { IntangibleMixin } from '../lib/Intangible';
import { JobPostingMixin } from '../lib/JobPosting';
import { MonetaryAmountDistributionMixin } from '../lib/MonetaryAmountDistribution';
import { MonetaryAmountMixin } from '../lib/MonetaryAmount';
import { OccupationalExperienceRequirementsMixin } from '../lib/OccupationalExperienceRequirements';
import { OccupationMixin } from '../lib/Occupation';
import { OrganizationMixin } from '../lib/Organization';
import { PlaceMixin } from '../lib/Place';
import { PriceSpecificationMixin } from '../lib/PriceSpecification';

export const JobPostingBundle = [
  AdministrativeAreaMixin as Mixin,
  CategoryCodeMixin as Mixin,
  ContactPointMixin as Mixin,
  IntangibleMixin as Mixin,
  JobPostingMixin as Mixin,
  MonetaryAmountDistributionMixin as Mixin,
  MonetaryAmountMixin as Mixin,
  OccupationalExperienceRequirementsMixin as Mixin,
  OccupationMixin as Mixin,
  OrganizationMixin as Mixin,
  PlaceMixin as Mixin,
  PriceSpecificationMixin as Mixin];
