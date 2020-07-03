import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StoreMixin } from '../Store';
import { SportingGoodsStoreMixin } from '../SportingGoodsStore';

export const SportingGoodsStoreBundle = [
  StoreMixin as Mixin,
  SportingGoodsStoreMixin as Mixin];
