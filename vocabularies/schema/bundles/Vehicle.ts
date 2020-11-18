import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ProductMixin } from '../lib/Product';
import { VehicleMixin } from '../lib/Vehicle';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';
import { EngineSpecificationMixin } from '../lib/EngineSpecification';

export const VehicleBundle = [
  ProductMixin as Mixin,
  VehicleMixin as Mixin,
  QuantitativeValueMixin as Mixin,
  EngineSpecificationMixin as Mixin];
