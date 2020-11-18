import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { VesselMixin } from '../lib/Vessel';
import { ArteryMixin } from '../lib/Artery';
import { AnatomicalStructureMixin } from '../lib/AnatomicalStructure';

export const ArteryBundle = [
  VesselMixin as Mixin,
  ArteryMixin as Mixin,
  AnatomicalStructureMixin as Mixin];
