import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AppellationMixin } from '../lib/Appellation';
import { NameMixin } from '../lib/Name';
import { ThingMixin } from '../lib/Thing';

export const NameBundle = [
  AppellationMixin as Mixin,
  NameMixin as Mixin,
  ThingMixin as Mixin];
