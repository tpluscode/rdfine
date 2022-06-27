import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CompoundPriceSpecificationMixin } from '../lib/CompoundPriceSpecification';
import { PriceSpecificationMixin } from '../lib/PriceSpecification';
import { UnitPriceSpecificationMixin } from '../lib/UnitPriceSpecification';

export const CompoundPriceSpecificationBundle = [
  CompoundPriceSpecificationMixin as Mixin,
  PriceSpecificationMixin as Mixin,
  UnitPriceSpecificationMixin as Mixin];
