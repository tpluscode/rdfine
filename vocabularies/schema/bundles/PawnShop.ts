import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StoreMixin } from '../lib/Store';
import { PawnShopMixin } from '../lib/PawnShop';

export const PawnShopBundle = [
  StoreMixin as Mixin,
  PawnShopMixin as Mixin];
