import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StructuredValueMixin } from '../lib/StructuredValue';
import { DefinedRegionMixin } from '../lib/DefinedRegion';
import { CountryMixin } from '../lib/Country';
import { PostalCodeRangeSpecificationMixin } from '../lib/PostalCodeRangeSpecification';

export const DefinedRegionBundle = [
  StructuredValueMixin as Mixin,
  DefinedRegionMixin as Mixin,
  CountryMixin as Mixin,
  PostalCodeRangeSpecificationMixin as Mixin];
