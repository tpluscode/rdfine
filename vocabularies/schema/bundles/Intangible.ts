import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../lib/Intangible';
import { ThingMixin } from '../lib/Thing';

export const IntangibleBundle = [
  IntangibleMixin as Mixin,
  ThingMixin as Mixin];
