import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AnatomicalStructureMixin } from '../lib/AnatomicalStructure';
import { JointMixin } from '../lib/Joint';
import { MedicalEntityMixin } from '../lib/MedicalEntity';

export const JointBundle = [
  AnatomicalStructureMixin as Mixin,
  JointMixin as Mixin,
  MedicalEntityMixin as Mixin];
