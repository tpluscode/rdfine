import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CivicStructureMixin } from '../lib/CivicStructure';
import { LodgingBusinessMixin } from '../lib/LodgingBusiness';
import { CampgroundMixin } from '../lib/Campground';

export const CampgroundBundle = [
  CivicStructureMixin as Mixin,
  LodgingBusinessMixin as Mixin,
  CampgroundMixin as Mixin];
