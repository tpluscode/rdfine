import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LocalBusinessMixin } from '../LocalBusiness';
import { AnimalShelterMixin } from '../AnimalShelter';

export const AnimalShelterBundle = [
  LocalBusinessMixin as Mixin,
  AnimalShelterMixin as Mixin];
