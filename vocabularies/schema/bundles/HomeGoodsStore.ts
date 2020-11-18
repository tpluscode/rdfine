import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StoreMixin } from '../lib/Store';
import { HomeGoodsStoreMixin } from '../lib/HomeGoodsStore';

export const HomeGoodsStoreBundle = [
  StoreMixin as Mixin,
  HomeGoodsStoreMixin as Mixin];
