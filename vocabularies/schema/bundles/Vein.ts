import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AnatomicalStructureMixin } from '../lib/AnatomicalStructure';
import { AnatomicalSystemMixin } from '../lib/AnatomicalSystem';
import { VeinMixin } from '../lib/Vein';
import { VesselMixin } from '../lib/Vessel';

export const VeinBundle = [
  AnatomicalStructureMixin as Mixin,
  AnatomicalSystemMixin as Mixin,
  VeinMixin as Mixin,
  VesselMixin as Mixin];
