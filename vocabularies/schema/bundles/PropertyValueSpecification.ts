import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../Intangible';
import { PropertyValueSpecificationMixin } from '../PropertyValueSpecification';
import { ThingMixin } from '../Thing';

export const PropertyValueSpecificationBundle = [
  IntangibleMixin as Mixin,
  PropertyValueSpecificationMixin as Mixin,
  ThingMixin as Mixin];
