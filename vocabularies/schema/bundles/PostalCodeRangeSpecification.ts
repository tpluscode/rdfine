import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PostalCodeRangeSpecificationMixin } from '../lib/PostalCodeRangeSpecification';
import { StructuredValueMixin } from '../lib/StructuredValue';

export const PostalCodeRangeSpecificationBundle = [
  PostalCodeRangeSpecificationMixin as Mixin,
  StructuredValueMixin as Mixin];
