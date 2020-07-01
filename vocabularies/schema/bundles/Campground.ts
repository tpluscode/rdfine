import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CivicStructureMixin } from '../CivicStructure';
import { LodgingBusinessMixin } from '../LodgingBusiness';
import { CampgroundMixin } from '../Campground';

export const CampgroundBundle = [
  CivicStructureMixin as Mixin,
  LodgingBusinessMixin as Mixin,
  CampgroundMixin as Mixin];
