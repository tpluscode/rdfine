import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ProductMixin } from '../Product';
import { VehicleMixin } from '../Vehicle';
import { QuantitativeValueMixin } from '../QuantitativeValue';
import { EngineSpecificationMixin } from '../EngineSpecification';

export const VehicleBundle = [
  ProductMixin as Mixin,
  VehicleMixin as Mixin,
  QuantitativeValueMixin as Mixin,
  EngineSpecificationMixin as Mixin];
