import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AnatomicalStructureMixin } from '../AnatomicalStructure';
import { JointMixin } from '../Joint';
import { MedicalEntityMixin } from '../MedicalEntity';

export const JointBundle = [
  AnatomicalStructureMixin as Mixin,
  JointMixin as Mixin,
  MedicalEntityMixin as Mixin];
