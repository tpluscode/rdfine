import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LocalBusinessMixin } from '../LocalBusiness';
import { AutomotiveBusinessMixin } from '../AutomotiveBusiness';

export const AutomotiveBusinessBundle = [
  LocalBusinessMixin as Mixin,
  AutomotiveBusinessMixin as Mixin];
