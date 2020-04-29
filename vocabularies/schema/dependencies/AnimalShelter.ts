import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LocalBusinessMixin } from '../LocalBusiness';
import { AnimalShelterMixin } from '../AnimalShelter';

export const AnimalShelterDependencies = [
  LocalBusinessMixin as Mixin,
  AnimalShelterMixin as Mixin];
