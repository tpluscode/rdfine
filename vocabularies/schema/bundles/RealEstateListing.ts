import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { WebPageMixin } from '../WebPage';
import { RealEstateListingMixin } from '../RealEstateListing';
import { DurationMixin } from '../Duration';
import { QuantitativeValueMixin } from '../QuantitativeValue';

export const RealEstateListingBundle = [
  WebPageMixin as Mixin,
  RealEstateListingMixin as Mixin,
  DurationMixin as Mixin,
  QuantitativeValueMixin as Mixin];
