import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../Intangible';
import { StructuredValueMixin } from '../StructuredValue';

export const StructuredValueDependencies = [
  IntangibleMixin as Mixin,
  StructuredValueMixin as Mixin];
