import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../lib/Intangible';
import { PropertyMixin } from '../lib/Property';

export const PropertyBundle = [
  IntangibleMixin as Mixin,
  PropertyMixin as Mixin];
