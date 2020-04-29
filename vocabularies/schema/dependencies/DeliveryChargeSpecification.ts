import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PriceSpecificationMixin } from '../PriceSpecification';
import { DeliveryChargeSpecificationMixin } from '../DeliveryChargeSpecification';
import { AdministrativeAreaMixin } from '../AdministrativeArea';
import { GeoShapeMixin } from '../GeoShape';
import { PlaceMixin } from '../Place';

export const DeliveryChargeSpecificationDependencies = [
  PriceSpecificationMixin as Mixin,
  DeliveryChargeSpecificationMixin as Mixin,
  AdministrativeAreaMixin as Mixin,
  GeoShapeMixin as Mixin,
  PlaceMixin as Mixin];
