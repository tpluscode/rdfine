import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StoreMixin } from '../Store';
import { HomeGoodsStoreMixin } from '../HomeGoodsStore';

export const HomeGoodsStoreBundle = [
  StoreMixin as Mixin,
  HomeGoodsStoreMixin as Mixin];
