import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PetStoreMixin } from '../lib/PetStore';
import { StoreMixin } from '../lib/Store';

export const PetStoreBundle = [
  PetStoreMixin as Mixin,
  StoreMixin as Mixin];
