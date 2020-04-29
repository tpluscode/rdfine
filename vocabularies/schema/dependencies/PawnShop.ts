import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StoreMixin } from '../Store';
import { PawnShopMixin } from '../PawnShop';

export const PawnShopDependencies = [
  StoreMixin as Mixin,
  PawnShopMixin as Mixin];
