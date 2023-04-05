import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SportingGoodsStoreMixin } from '../lib/SportingGoodsStore';
import { StoreMixin } from '../lib/Store';

export const SportingGoodsStoreBundle = [
  SportingGoodsStoreMixin as Mixin,
  StoreMixin as Mixin];
