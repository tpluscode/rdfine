import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { VesselMixin } from '../lib/Vessel';
import { VeinMixin } from '../lib/Vein';
import { AnatomicalStructureMixin } from '../lib/AnatomicalStructure';
import { AnatomicalSystemMixin } from '../lib/AnatomicalSystem';

export const VeinBundle = [
  VesselMixin as Mixin,
  VeinMixin as Mixin,
  AnatomicalStructureMixin as Mixin,
  AnatomicalSystemMixin as Mixin];
