import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AnatomicalStructureMixin } from '../lib/AnatomicalStructure';
import { AnatomicalSystemMixin } from '../lib/AnatomicalSystem';
import { LifestyleModificationMixin } from '../lib/LifestyleModification';
import { PhysicalActivityMixin } from '../lib/PhysicalActivity';
import { SuperficialAnatomyMixin } from '../lib/SuperficialAnatomy';
import { ThingMixin } from '../lib/Thing';

export const PhysicalActivityBundle = [
  AnatomicalStructureMixin as Mixin,
  AnatomicalSystemMixin as Mixin,
  LifestyleModificationMixin as Mixin,
  PhysicalActivityMixin as Mixin,
  SuperficialAnatomyMixin as Mixin,
  ThingMixin as Mixin];
