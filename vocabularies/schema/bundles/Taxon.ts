import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ThingMixin } from '../lib/Thing';
import { TaxonMixin } from '../lib/Taxon';
import { PropertyValueMixin } from '../lib/PropertyValue';

export const TaxonBundle = [
  ThingMixin as Mixin,
  TaxonMixin as Mixin,
  PropertyValueMixin as Mixin];
