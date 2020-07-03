import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../Intangible';
import { StructuredValueMixin } from '../StructuredValue';

export const StructuredValueBundle = [
  IntangibleMixin as Mixin,
  StructuredValueMixin as Mixin];
