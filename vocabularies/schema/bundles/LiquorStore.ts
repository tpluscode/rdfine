import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StoreMixin } from '../Store';
import { LiquorStoreMixin } from '../LiquorStore';

export const LiquorStoreBundle = [
  StoreMixin as Mixin,
  LiquorStoreMixin as Mixin];
