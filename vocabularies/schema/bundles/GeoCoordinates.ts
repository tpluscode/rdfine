import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CountryMixin } from '../lib/Country';
import { GeoCoordinatesMixin } from '../lib/GeoCoordinates';
import { PostalAddressMixin } from '../lib/PostalAddress';
import { StructuredValueMixin } from '../lib/StructuredValue';

export const GeoCoordinatesBundle = [
  CountryMixin as Mixin,
  GeoCoordinatesMixin as Mixin,
  PostalAddressMixin as Mixin,
  StructuredValueMixin as Mixin];
