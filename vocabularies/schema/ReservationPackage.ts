import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import ReservationMixin from './Reservation';

export interface ReservationPackage extends Schema.Reservation, RdfResource {
  subReservation: Schema.Reservation;
}

export default function ReservationPackageMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ReservationPackageClass extends ReservationMixin(Resource) implements ReservationPackage {
    @property.resource()
    subReservation!: Schema.Reservation;
  }
  return ReservationPackageClass
}

class ReservationPackageImpl extends ReservationPackageMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ReservationPackage>) {
    super(arg, init)
    this.types.add(schema.ReservationPackage)
  }
}
ReservationPackageMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ReservationPackage)
ReservationPackageMixin.Class = ReservationPackageImpl
