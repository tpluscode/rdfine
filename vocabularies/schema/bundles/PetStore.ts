import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StoreMixin } from '../lib/Store';
import { PetStoreMixin } from '../lib/PetStore';

export const PetStoreBundle = [
  StoreMixin as Mixin,
  PetStoreMixin as Mixin];
