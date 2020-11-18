import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LifestyleModificationMixin } from '../lib/LifestyleModification';
import { PhysicalActivityMixin } from '../lib/PhysicalActivity';
import { AnatomicalStructureMixin } from '../lib/AnatomicalStructure';
import { AnatomicalSystemMixin } from '../lib/AnatomicalSystem';
import { SuperficialAnatomyMixin } from '../lib/SuperficialAnatomy';
import { ThingMixin } from '../lib/Thing';

export const PhysicalActivityBundle = [
  LifestyleModificationMixin as Mixin,
  PhysicalActivityMixin as Mixin,
  AnatomicalStructureMixin as Mixin,
  AnatomicalSystemMixin as Mixin,
  SuperficialAnatomyMixin as Mixin,
  ThingMixin as Mixin];
