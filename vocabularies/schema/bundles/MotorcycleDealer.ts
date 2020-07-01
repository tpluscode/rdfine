import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AutomotiveBusinessMixin } from '../AutomotiveBusiness';
import { MotorcycleDealerMixin } from '../MotorcycleDealer';

export const MotorcycleDealerBundle = [
  AutomotiveBusinessMixin as Mixin,
  MotorcycleDealerMixin as Mixin];
