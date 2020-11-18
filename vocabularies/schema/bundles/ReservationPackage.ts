import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ReservationMixin } from '../lib/Reservation';
import { ReservationPackageMixin } from '../lib/ReservationPackage';

export const ReservationPackageBundle = [
  ReservationMixin as Mixin,
  ReservationPackageMixin as Mixin];
