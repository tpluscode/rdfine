import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../lib/Intangible';
import { OccupationMixin } from '../lib/Occupation';
import { MonetaryAmountMixin } from '../lib/MonetaryAmount';
import { MonetaryAmountDistributionMixin } from '../lib/MonetaryAmountDistribution';
import { CategoryCodeMixin } from '../lib/CategoryCode';
import { AdministrativeAreaMixin } from '../lib/AdministrativeArea';

export const OccupationBundle = [
  IntangibleMixin as Mixin,
  OccupationMixin as Mixin,
  MonetaryAmountMixin as Mixin,
  MonetaryAmountDistributionMixin as Mixin,
  CategoryCodeMixin as Mixin,
  AdministrativeAreaMixin as Mixin];
