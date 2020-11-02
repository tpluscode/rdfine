import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LifestyleModificationMixin } from '../LifestyleModification';
import { PhysicalActivityMixin } from '../PhysicalActivity';
import { AnatomicalStructureMixin } from '../AnatomicalStructure';
import { AnatomicalSystemMixin } from '../AnatomicalSystem';
import { SuperficialAnatomyMixin } from '../SuperficialAnatomy';
import { ThingMixin } from '../Thing';

export const PhysicalActivityBundle = [
  LifestyleModificationMixin as Mixin,
  PhysicalActivityMixin as Mixin,
  AnatomicalStructureMixin as Mixin,
  AnatomicalSystemMixin as Mixin,
  SuperficialAnatomyMixin as Mixin,
  ThingMixin as Mixin];
