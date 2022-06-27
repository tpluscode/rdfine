import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { HomeGoodsStoreMixin } from '../lib/HomeGoodsStore';
import { StoreMixin } from '../lib/Store';

export const HomeGoodsStoreBundle = [
  HomeGoodsStoreMixin as Mixin,
  StoreMixin as Mixin];
