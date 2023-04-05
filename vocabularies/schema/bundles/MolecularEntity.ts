import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BioChemEntityMixin } from '../lib/BioChemEntity';
import { MolecularEntityMixin } from '../lib/MolecularEntity';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';

export const MolecularEntityBundle = [
  BioChemEntityMixin as Mixin,
  MolecularEntityMixin as Mixin,
  QuantitativeValueMixin as Mixin];
