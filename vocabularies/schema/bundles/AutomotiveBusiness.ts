import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AutomotiveBusinessMixin } from '../lib/AutomotiveBusiness';
import { LocalBusinessMixin } from '../lib/LocalBusiness';

export const AutomotiveBusinessBundle = [
  AutomotiveBusinessMixin as Mixin,
  LocalBusinessMixin as Mixin];
