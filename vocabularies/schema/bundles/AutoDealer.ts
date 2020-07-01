import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AutomotiveBusinessMixin } from '../AutomotiveBusiness';
import { AutoDealerMixin } from '../AutoDealer';

export const AutoDealerBundle = [
  AutomotiveBusinessMixin as Mixin,
  AutoDealerMixin as Mixin];
