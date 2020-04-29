import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StructuredValueMixin } from '../StructuredValue';
import { OpeningHoursSpecificationMixin } from '../OpeningHoursSpecification';

export const OpeningHoursSpecificationDependencies = [
  StructuredValueMixin as Mixin,
  OpeningHoursSpecificationMixin as Mixin];
