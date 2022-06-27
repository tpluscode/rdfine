import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AdministrativeAreaMixin } from '../lib/AdministrativeArea';
import { DeliveryChargeSpecificationMixin } from '../lib/DeliveryChargeSpecification';
import { GeoShapeMixin } from '../lib/GeoShape';
import { PlaceMixin } from '../lib/Place';
import { PriceSpecificationMixin } from '../lib/PriceSpecification';

export const DeliveryChargeSpecificationBundle = [
  AdministrativeAreaMixin as Mixin,
  DeliveryChargeSpecificationMixin as Mixin,
  GeoShapeMixin as Mixin,
  PlaceMixin as Mixin,
  PriceSpecificationMixin as Mixin];
