import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AutomotiveBusinessMixin } from '../lib/AutomotiveBusiness';
import { AutoBodyShopMixin } from '../lib/AutoBodyShop';

export const AutoBodyShopBundle = [
  AutomotiveBusinessMixin as Mixin,
  AutoBodyShopMixin as Mixin];
