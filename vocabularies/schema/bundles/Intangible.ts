import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ThingMixin } from '../lib/Thing';
import { IntangibleMixin } from '../lib/Intangible';

export const IntangibleBundle = [
  ThingMixin as Mixin,
  IntangibleMixin as Mixin];
