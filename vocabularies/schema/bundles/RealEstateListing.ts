import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { WebPageMixin } from '../lib/WebPage';
import { RealEstateListingMixin } from '../lib/RealEstateListing';
import { DurationMixin } from '../lib/Duration';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';

export const RealEstateListingBundle = [
  WebPageMixin as Mixin,
  RealEstateListingMixin as Mixin,
  DurationMixin as Mixin,
  QuantitativeValueMixin as Mixin];
