import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StoreMixin } from '../Store';
import { ComputerStoreMixin } from '../ComputerStore';

export const ComputerStoreBundle = [
  StoreMixin as Mixin,
  ComputerStoreMixin as Mixin];
