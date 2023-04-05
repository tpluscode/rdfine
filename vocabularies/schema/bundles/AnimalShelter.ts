import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AnimalShelterMixin } from '../lib/AnimalShelter';
import { LocalBusinessMixin } from '../lib/LocalBusiness';

export const AnimalShelterBundle = [
  AnimalShelterMixin as Mixin,
  LocalBusinessMixin as Mixin];
