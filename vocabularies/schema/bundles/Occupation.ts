import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../Intangible';
import { OccupationMixin } from '../Occupation';
import { MonetaryAmountMixin } from '../MonetaryAmount';
import { MonetaryAmountDistributionMixin } from '../MonetaryAmountDistribution';
import { AdministrativeAreaMixin } from '../AdministrativeArea';

export const OccupationBundle = [
  IntangibleMixin as Mixin,
  OccupationMixin as Mixin,
  MonetaryAmountMixin as Mixin,
  MonetaryAmountDistributionMixin as Mixin,
  AdministrativeAreaMixin as Mixin];
