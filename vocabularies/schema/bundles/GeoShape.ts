import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CountryMixin } from '../lib/Country';
import { GeoShapeMixin } from '../lib/GeoShape';
import { PostalAddressMixin } from '../lib/PostalAddress';
import { StructuredValueMixin } from '../lib/StructuredValue';

export const GeoShapeBundle = [
  CountryMixin as Mixin,
  GeoShapeMixin as Mixin,
  PostalAddressMixin as Mixin,
  StructuredValueMixin as Mixin];
