import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PriceSpecificationMixin } from '../lib/PriceSpecification';
import { DeliveryChargeSpecificationMixin } from '../lib/DeliveryChargeSpecification';
import { PlaceMixin } from '../lib/Place';
import { AdministrativeAreaMixin } from '../lib/AdministrativeArea';
import { GeoShapeMixin } from '../lib/GeoShape';

export const DeliveryChargeSpecificationBundle = [
  PriceSpecificationMixin as Mixin,
  DeliveryChargeSpecificationMixin as Mixin,
  PlaceMixin as Mixin,
  AdministrativeAreaMixin as Mixin,
  GeoShapeMixin as Mixin];
