import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StructuredValueMixin } from '../lib/StructuredValue';
import { OpeningHoursSpecificationMixin } from '../lib/OpeningHoursSpecification';

export const OpeningHoursSpecificationBundle = [
  StructuredValueMixin as Mixin,
  OpeningHoursSpecificationMixin as Mixin];
