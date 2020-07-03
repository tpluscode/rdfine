import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AutomotiveBusinessMixin } from '../AutomotiveBusiness';
import { AutoWashMixin } from '../AutoWash';

export const AutoWashBundle = [
  AutomotiveBusinessMixin as Mixin,
  AutoWashMixin as Mixin];
