import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AutoDealerMixin } from '../lib/AutoDealer';
import { AutomotiveBusinessMixin } from '../lib/AutomotiveBusiness';

export const AutoDealerBundle = [
  AutoDealerMixin as Mixin,
  AutomotiveBusinessMixin as Mixin];
