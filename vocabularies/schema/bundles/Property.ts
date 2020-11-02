import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../Intangible';
import { PropertyMixin } from '../Property';

export const PropertyBundle = [
  IntangibleMixin as Mixin,
  PropertyMixin as Mixin];
