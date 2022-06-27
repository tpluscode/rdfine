import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AutoBodyShopMixin } from '../lib/AutoBodyShop';
import { AutomotiveBusinessMixin } from '../lib/AutomotiveBusiness';

export const AutoBodyShopBundle = [
  AutoBodyShopMixin as Mixin,
  AutomotiveBusinessMixin as Mixin];
