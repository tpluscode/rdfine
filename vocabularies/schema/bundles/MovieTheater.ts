import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CivicStructureMixin } from '../CivicStructure';
import { EntertainmentBusinessMixin } from '../EntertainmentBusiness';
import { MovieTheaterMixin } from '../MovieTheater';

export const MovieTheaterBundle = [
  CivicStructureMixin as Mixin,
  EntertainmentBusinessMixin as Mixin,
  MovieTheaterMixin as Mixin];
