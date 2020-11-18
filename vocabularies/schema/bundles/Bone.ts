import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AnatomicalStructureMixin } from '../lib/AnatomicalStructure';
import { BoneMixin } from '../lib/Bone';

export const BoneBundle = [
  AnatomicalStructureMixin as Mixin,
  BoneMixin as Mixin];
