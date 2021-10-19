import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ThingMixin } from '../lib/Thing';
import { BioChemEntityMixin } from '../lib/BioChemEntity';
import { MedicalConditionMixin } from '../lib/MedicalCondition';
import { PropertyValueMixin } from '../lib/PropertyValue';
import { GeneMixin } from '../lib/Gene';
import { TaxonMixin } from '../lib/Taxon';

export const BioChemEntityBundle = [
  ThingMixin as Mixin,
  BioChemEntityMixin as Mixin,
  MedicalConditionMixin as Mixin,
  PropertyValueMixin as Mixin,
  GeneMixin as Mixin,
  TaxonMixin as Mixin];
