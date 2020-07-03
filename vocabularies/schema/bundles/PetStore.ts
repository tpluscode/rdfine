import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StoreMixin } from '../Store';
import { PetStoreMixin } from '../PetStore';

export const PetStoreBundle = [
  StoreMixin as Mixin,
  PetStoreMixin as Mixin];
