import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StructuredValueMixin } from '../StructuredValue';
import { OpeningHoursSpecificationMixin } from '../OpeningHoursSpecification';

export const OpeningHoursSpecificationBundle = [
  StructuredValueMixin as Mixin,
  OpeningHoursSpecificationMixin as Mixin];
