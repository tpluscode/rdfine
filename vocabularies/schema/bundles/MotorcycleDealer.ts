import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AutomotiveBusinessMixin } from '../lib/AutomotiveBusiness';
import { MotorcycleDealerMixin } from '../lib/MotorcycleDealer';

export const MotorcycleDealerBundle = [
  AutomotiveBusinessMixin as Mixin,
  MotorcycleDealerMixin as Mixin];
