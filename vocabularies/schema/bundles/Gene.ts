import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AnatomicalStructureMixin } from '../lib/AnatomicalStructure';
import { AnatomicalSystemMixin } from '../lib/AnatomicalSystem';
import { BioChemEntityMixin } from '../lib/BioChemEntity';
import { GeneMixin } from '../lib/Gene';

export const GeneBundle = [
  AnatomicalStructureMixin as Mixin,
  AnatomicalSystemMixin as Mixin,
  BioChemEntityMixin as Mixin,
  GeneMixin as Mixin];
