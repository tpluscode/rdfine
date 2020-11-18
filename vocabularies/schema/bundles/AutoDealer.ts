import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AutomotiveBusinessMixin } from '../lib/AutomotiveBusiness';
import { AutoDealerMixin } from '../lib/AutoDealer';

export const AutoDealerBundle = [
  AutomotiveBusinessMixin as Mixin,
  AutoDealerMixin as Mixin];
