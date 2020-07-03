import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StoreMixin } from '../Store';
import { ToyStoreMixin } from '../ToyStore';

export const ToyStoreBundle = [
  StoreMixin as Mixin,
  ToyStoreMixin as Mixin];
