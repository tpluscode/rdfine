import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AutomotiveBusinessMixin } from '../lib/AutomotiveBusiness';
import { AutoWashMixin } from '../lib/AutoWash';

export const AutoWashBundle = [
  AutomotiveBusinessMixin as Mixin,
  AutoWashMixin as Mixin];
