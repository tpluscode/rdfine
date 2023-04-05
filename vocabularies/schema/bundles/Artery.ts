import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AnatomicalStructureMixin } from '../lib/AnatomicalStructure';
import { ArteryMixin } from '../lib/Artery';
import { VesselMixin } from '../lib/Vessel';

export const ArteryBundle = [
  AnatomicalStructureMixin as Mixin,
  ArteryMixin as Mixin,
  VesselMixin as Mixin];
