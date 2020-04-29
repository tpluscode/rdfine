import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AccommodationMixin } from '../Accommodation';
import { CampingPitchMixin } from '../CampingPitch';

export const CampingPitchDependencies = [
  AccommodationMixin as Mixin,
  CampingPitchMixin as Mixin];
