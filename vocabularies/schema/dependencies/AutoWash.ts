import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AutomotiveBusinessMixin } from '../AutomotiveBusiness';
import { AutoWashMixin } from '../AutoWash';

export const AutoWashDependencies = [
  AutomotiveBusinessMixin as Mixin,
  AutoWashMixin as Mixin];
