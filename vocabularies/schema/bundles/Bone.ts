import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AnatomicalStructureMixin } from '../AnatomicalStructure';
import { BoneMixin } from '../Bone';

export const BoneBundle = [
  AnatomicalStructureMixin as Mixin,
  BoneMixin as Mixin];
