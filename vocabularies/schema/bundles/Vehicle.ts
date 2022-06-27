import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EngineSpecificationMixin } from '../lib/EngineSpecification';
import { ProductMixin } from '../lib/Product';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';
import { VehicleMixin } from '../lib/Vehicle';

export const VehicleBundle = [
  EngineSpecificationMixin as Mixin,
  ProductMixin as Mixin,
  QuantitativeValueMixin as Mixin,
  VehicleMixin as Mixin];
