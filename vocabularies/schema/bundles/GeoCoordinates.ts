import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StructuredValueMixin } from '../lib/StructuredValue';
import { GeoCoordinatesMixin } from '../lib/GeoCoordinates';
import { PostalAddressMixin } from '../lib/PostalAddress';
import { CountryMixin } from '../lib/Country';

export const GeoCoordinatesBundle = [
  StructuredValueMixin as Mixin,
  GeoCoordinatesMixin as Mixin,
  PostalAddressMixin as Mixin,
  CountryMixin as Mixin];
