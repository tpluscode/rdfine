import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ReservationMixin } from '../Reservation';
import { ReservationPackageMixin } from '../ReservationPackage';

export const ReservationPackageDependencies = [
  ReservationMixin as Mixin,
  ReservationPackageMixin as Mixin];
