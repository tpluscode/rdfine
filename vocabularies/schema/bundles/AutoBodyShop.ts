import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AutomotiveBusinessMixin } from '../AutomotiveBusiness';
import { AutoBodyShopMixin } from '../AutoBodyShop';

export const AutoBodyShopBundle = [
  AutomotiveBusinessMixin as Mixin,
  AutoBodyShopMixin as Mixin];
