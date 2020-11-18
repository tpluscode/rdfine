import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StoreMixin } from '../lib/Store';
import { ComputerStoreMixin } from '../lib/ComputerStore';

export const ComputerStoreBundle = [
  StoreMixin as Mixin,
  ComputerStoreMixin as Mixin];
