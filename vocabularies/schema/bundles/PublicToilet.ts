import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CivicStructureMixin } from '../CivicStructure';
import { PublicToiletMixin } from '../PublicToilet';

export const PublicToiletBundle = [
  CivicStructureMixin as Mixin,
  PublicToiletMixin as Mixin];
