import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StructuredValueMixin } from '../StructuredValue';
import { PostalCodeRangeSpecificationMixin } from '../PostalCodeRangeSpecification';

export const PostalCodeRangeSpecificationBundle = [
  StructuredValueMixin as Mixin,
  PostalCodeRangeSpecificationMixin as Mixin];
