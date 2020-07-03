import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StructuredValueMixin } from '../StructuredValue';
import { GeoShapeMixin } from '../GeoShape';
import { PostalAddressMixin } from '../PostalAddress';
import { CountryMixin } from '../Country';

export const GeoShapeBundle = [
  StructuredValueMixin as Mixin,
  GeoShapeMixin as Mixin,
  PostalAddressMixin as Mixin,
  CountryMixin as Mixin];
