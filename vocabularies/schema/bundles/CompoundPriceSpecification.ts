import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PriceSpecificationMixin } from '../lib/PriceSpecification';
import { CompoundPriceSpecificationMixin } from '../lib/CompoundPriceSpecification';
import { UnitPriceSpecificationMixin } from '../lib/UnitPriceSpecification';

export const CompoundPriceSpecificationBundle = [
  PriceSpecificationMixin as Mixin,
  CompoundPriceSpecificationMixin as Mixin,
  UnitPriceSpecificationMixin as Mixin];
