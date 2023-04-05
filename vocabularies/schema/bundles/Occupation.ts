import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AdministrativeAreaMixin } from '../lib/AdministrativeArea';
import { CategoryCodeMixin } from '../lib/CategoryCode';
import { IntangibleMixin } from '../lib/Intangible';
import { MonetaryAmountDistributionMixin } from '../lib/MonetaryAmountDistribution';
import { MonetaryAmountMixin } from '../lib/MonetaryAmount';
import { OccupationalExperienceRequirementsMixin } from '../lib/OccupationalExperienceRequirements';
import { OccupationMixin } from '../lib/Occupation';

export const OccupationBundle = [
  AdministrativeAreaMixin as Mixin,
  CategoryCodeMixin as Mixin,
  IntangibleMixin as Mixin,
  MonetaryAmountDistributionMixin as Mixin,
  MonetaryAmountMixin as Mixin,
  OccupationalExperienceRequirementsMixin as Mixin,
  OccupationMixin as Mixin];
