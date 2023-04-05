import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DurationMixin } from '../lib/Duration';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';
import { RealEstateListingMixin } from '../lib/RealEstateListing';
import { WebPageMixin } from '../lib/WebPage';

export const RealEstateListingBundle = [
  DurationMixin as Mixin,
  QuantitativeValueMixin as Mixin,
  RealEstateListingMixin as Mixin,
  WebPageMixin as Mixin];
