import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CountryMixin } from '../lib/Country';
import { DefinedRegionMixin } from '../lib/DefinedRegion';
import { PostalCodeRangeSpecificationMixin } from '../lib/PostalCodeRangeSpecification';
import { StructuredValueMixin } from '../lib/StructuredValue';

export const DefinedRegionBundle = [
  CountryMixin as Mixin,
  DefinedRegionMixin as Mixin,
  PostalCodeRangeSpecificationMixin as Mixin,
  StructuredValueMixin as Mixin];
