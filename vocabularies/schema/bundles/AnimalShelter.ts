import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LocalBusinessMixin } from '../lib/LocalBusiness';
import { AnimalShelterMixin } from '../lib/AnimalShelter';

export const AnimalShelterBundle = [
  LocalBusinessMixin as Mixin,
  AnimalShelterMixin as Mixin];
