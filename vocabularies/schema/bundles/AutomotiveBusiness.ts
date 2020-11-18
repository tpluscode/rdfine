import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LocalBusinessMixin } from '../lib/LocalBusiness';
import { AutomotiveBusinessMixin } from '../lib/AutomotiveBusiness';

export const AutomotiveBusinessBundle = [
  LocalBusinessMixin as Mixin,
  AutomotiveBusinessMixin as Mixin];
