import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { VesselMixin } from '../Vessel';
import { VeinMixin } from '../Vein';
import { AnatomicalStructureMixin } from '../AnatomicalStructure';
import { AnatomicalSystemMixin } from '../AnatomicalSystem';

export const VeinBundle = [
  VesselMixin as Mixin,
  VeinMixin as Mixin,
  AnatomicalStructureMixin as Mixin,
  AnatomicalSystemMixin as Mixin];
