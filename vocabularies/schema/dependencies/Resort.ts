import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LodgingBusinessMixin } from '../LodgingBusiness';
import { ResortMixin } from '../Resort';

export const ResortDependencies = [
  LodgingBusinessMixin as Mixin,
  ResortMixin as Mixin];
