import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StoreMixin } from '../Store';
import { PawnShopMixin } from '../PawnShop';

export const PawnShopBundle = [
  StoreMixin as Mixin,
  PawnShopMixin as Mixin];
