import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PriceSpecificationMixin } from '../PriceSpecification';
import { CompoundPriceSpecificationMixin } from '../CompoundPriceSpecification';
import { UnitPriceSpecificationMixin } from '../UnitPriceSpecification';

export const CompoundPriceSpecificationDependencies = [
  PriceSpecificationMixin as Mixin,
  CompoundPriceSpecificationMixin as Mixin,
  UnitPriceSpecificationMixin as Mixin];
