import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StructuredValueMixin } from '../lib/StructuredValue';
import { PostalCodeRangeSpecificationMixin } from '../lib/PostalCodeRangeSpecification';

export const PostalCodeRangeSpecificationBundle = [
  StructuredValueMixin as Mixin,
  PostalCodeRangeSpecificationMixin as Mixin];
