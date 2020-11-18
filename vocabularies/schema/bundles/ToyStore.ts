import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StoreMixin } from '../lib/Store';
import { ToyStoreMixin } from '../lib/ToyStore';

export const ToyStoreBundle = [
  StoreMixin as Mixin,
  ToyStoreMixin as Mixin];
