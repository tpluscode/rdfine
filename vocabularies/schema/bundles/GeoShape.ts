import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StructuredValueMixin } from '../lib/StructuredValue';
import { GeoShapeMixin } from '../lib/GeoShape';
import { PostalAddressMixin } from '../lib/PostalAddress';
import { CountryMixin } from '../lib/Country';

export const GeoShapeBundle = [
  StructuredValueMixin as Mixin,
  GeoShapeMixin as Mixin,
  PostalAddressMixin as Mixin,
  CountryMixin as Mixin];
