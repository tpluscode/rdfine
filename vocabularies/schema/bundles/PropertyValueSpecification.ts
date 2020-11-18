import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../lib/Intangible';
import { PropertyValueSpecificationMixin } from '../lib/PropertyValueSpecification';
import { ThingMixin } from '../lib/Thing';

export const PropertyValueSpecificationBundle = [
  IntangibleMixin as Mixin,
  PropertyValueSpecificationMixin as Mixin,
  ThingMixin as Mixin];
