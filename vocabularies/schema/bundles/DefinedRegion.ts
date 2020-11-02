import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StructuredValueMixin } from '../StructuredValue';
import { DefinedRegionMixin } from '../DefinedRegion';
import { CountryMixin } from '../Country';
import { PostalCodeRangeSpecificationMixin } from '../PostalCodeRangeSpecification';

export const DefinedRegionBundle = [
  StructuredValueMixin as Mixin,
  DefinedRegionMixin as Mixin,
  CountryMixin as Mixin,
  PostalCodeRangeSpecificationMixin as Mixin];
