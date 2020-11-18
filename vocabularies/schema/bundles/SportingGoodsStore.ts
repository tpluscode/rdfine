import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StoreMixin } from '../lib/Store';
import { SportingGoodsStoreMixin } from '../lib/SportingGoodsStore';

export const SportingGoodsStoreBundle = [
  StoreMixin as Mixin,
  SportingGoodsStoreMixin as Mixin];
