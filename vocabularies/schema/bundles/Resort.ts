import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LodgingBusinessMixin } from '../lib/LodgingBusiness';
import { ResortMixin } from '../lib/Resort';

export const ResortBundle = [
  LodgingBusinessMixin as Mixin,
  ResortMixin as Mixin];
