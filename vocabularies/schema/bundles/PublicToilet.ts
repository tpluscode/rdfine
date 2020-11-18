import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CivicStructureMixin } from '../lib/CivicStructure';
import { PublicToiletMixin } from '../lib/PublicToilet';

export const PublicToiletBundle = [
  CivicStructureMixin as Mixin,
  PublicToiletMixin as Mixin];
