import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { VesselMixin } from '../Vessel';
import { ArteryMixin } from '../Artery';
import { AnatomicalStructureMixin } from '../AnatomicalStructure';

export const ArteryBundle = [
  VesselMixin as Mixin,
  ArteryMixin as Mixin,
  AnatomicalStructureMixin as Mixin];
