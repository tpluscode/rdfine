import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BioChemEntityMixin } from '../lib/BioChemEntity';
import { ProteinMixin } from '../lib/Protein';

export const ProteinBundle = [
  BioChemEntityMixin as Mixin,
  ProteinMixin as Mixin];
