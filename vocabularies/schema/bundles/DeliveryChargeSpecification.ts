import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PriceSpecificationMixin } from '../lib/PriceSpecification';
import { DeliveryChargeSpecificationMixin } from '../lib/DeliveryChargeSpecification';
import { AdministrativeAreaMixin } from '../lib/AdministrativeArea';
import { GeoShapeMixin } from '../lib/GeoShape';
import { PlaceMixin } from '../lib/Place';

export const DeliveryChargeSpecificationBundle = [
  PriceSpecificationMixin as Mixin,
  DeliveryChargeSpecificationMixin as Mixin,
  AdministrativeAreaMixin as Mixin,
  GeoShapeMixin as Mixin,
  PlaceMixin as Mixin];
