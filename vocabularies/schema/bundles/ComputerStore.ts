import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ComputerStoreMixin } from '../lib/ComputerStore';
import { StoreMixin } from '../lib/Store';

export const ComputerStoreBundle = [
  ComputerStoreMixin as Mixin,
  StoreMixin as Mixin];
