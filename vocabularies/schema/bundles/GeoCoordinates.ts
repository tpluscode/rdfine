import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StructuredValueMixin } from '../StructuredValue';
import { GeoCoordinatesMixin } from '../GeoCoordinates';
import { PostalAddressMixin } from '../PostalAddress';
import { CountryMixin } from '../Country';

export const GeoCoordinatesBundle = [
  StructuredValueMixin as Mixin,
  GeoCoordinatesMixin as Mixin,
  PostalAddressMixin as Mixin,
  CountryMixin as Mixin];
