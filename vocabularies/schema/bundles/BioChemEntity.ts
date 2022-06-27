import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BioChemEntityMixin } from '../lib/BioChemEntity';
import { GeneMixin } from '../lib/Gene';
import { MedicalConditionMixin } from '../lib/MedicalCondition';
import { PropertyValueMixin } from '../lib/PropertyValue';
import { TaxonMixin } from '../lib/Taxon';
import { ThingMixin } from '../lib/Thing';

export const BioChemEntityBundle = [
  BioChemEntityMixin as Mixin,
  GeneMixin as Mixin,
  MedicalConditionMixin as Mixin,
  PropertyValueMixin as Mixin,
  TaxonMixin as Mixin,
  ThingMixin as Mixin];
