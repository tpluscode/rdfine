import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ProductMixin } from '../Product';
import { VehicleMixin } from '../Vehicle';
import { QuantitativeValueMixin } from '../QuantitativeValue';
import { EngineSpecificationMixin } from '../EngineSpecification';

export const VehicleDependencies = [
  ProductMixin as Mixin,
  VehicleMixin as Mixin,
  QuantitativeValueMixin as Mixin,
  EngineSpecificationMixin as Mixin];
