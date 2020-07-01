import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ThingMixin } from '../Thing';
import { IntangibleMixin } from '../Intangible';

export const IntangibleBundle = [
  ThingMixin as Mixin,
  IntangibleMixin as Mixin];
