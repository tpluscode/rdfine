import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { OpeningHoursSpecificationMixin } from '../lib/OpeningHoursSpecification';
import { StructuredValueMixin } from '../lib/StructuredValue';

export const OpeningHoursSpecificationBundle = [
  OpeningHoursSpecificationMixin as Mixin,
  StructuredValueMixin as Mixin];
