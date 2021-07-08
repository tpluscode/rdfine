import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../lib/Intangible';
import { JobPostingMixin } from '../lib/JobPosting';
import { AdministrativeAreaMixin } from '../lib/AdministrativeArea';
import { ContactPointMixin } from '../lib/ContactPoint';
import { PriceSpecificationMixin } from '../lib/PriceSpecification';
import { MonetaryAmountMixin } from '../lib/MonetaryAmount';
import { OrganizationMixin } from '../lib/Organization';
import { MonetaryAmountDistributionMixin } from '../lib/MonetaryAmountDistribution';
import { OccupationalExperienceRequirementsMixin } from '../lib/OccupationalExperienceRequirements';
import { PlaceMixin } from '../lib/Place';
import { CategoryCodeMixin } from '../lib/CategoryCode';
import { OccupationMixin } from '../lib/Occupation';

export const JobPostingBundle = [
  IntangibleMixin as Mixin,
  JobPostingMixin as Mixin,
  AdministrativeAreaMixin as Mixin,
  ContactPointMixin as Mixin,
  PriceSpecificationMixin as Mixin,
  MonetaryAmountMixin as Mixin,
  OrganizationMixin as Mixin,
  MonetaryAmountDistributionMixin as Mixin,
  OccupationalExperienceRequirementsMixin as Mixin,
  PlaceMixin as Mixin,
  CategoryCodeMixin as Mixin,
  OccupationMixin as Mixin];
