import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BioChemEntityMixin } from '../lib/BioChemEntity';
import { ChemicalSubstanceMixin } from '../lib/ChemicalSubstance';

export const ChemicalSubstanceBundle = [
  BioChemEntityMixin as Mixin,
  ChemicalSubstanceMixin as Mixin];
