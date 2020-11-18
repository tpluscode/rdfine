import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../lib/Intangible';
import { StructuredValueMixin } from '../lib/StructuredValue';

export const StructuredValueBundle = [
  IntangibleMixin as Mixin,
  StructuredValueMixin as Mixin];
