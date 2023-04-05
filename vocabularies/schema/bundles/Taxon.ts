import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PropertyValueMixin } from '../lib/PropertyValue';
import { TaxonMixin } from '../lib/Taxon';
import { ThingMixin } from '../lib/Thing';

export const TaxonBundle = [
  PropertyValueMixin as Mixin,
  TaxonMixin as Mixin,
  ThingMixin as Mixin];
