import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PawnShopMixin } from '../lib/PawnShop';
import { StoreMixin } from '../lib/Store';

export const PawnShopBundle = [
  PawnShopMixin as Mixin,
  StoreMixin as Mixin];
