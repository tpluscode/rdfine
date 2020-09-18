import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { ReservationMixin } from './Reservation';

export interface ReservationPackage extends Schema.Reservation, RdfResource {
  subReservation: Schema.Reservation | undefined;
}

export function ReservationPackageMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ReservationPackageClass extends ReservationMixin(Resource) implements ReservationPackage {
    @property.resource()
    subReservation: Schema.Reservation | undefined;
  }
  return ReservationPackageClass
}

class ReservationPackageImpl extends ReservationPackageMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ReservationPackage>) {
    super(arg, init)
    this.types.add(schema.ReservationPackage)
  }

  static readonly __mixins: Mixin[] = [ReservationPackageMixin, ReservationMixin];
}
ReservationPackageMixin.appliesTo = schema.ReservationPackage
ReservationPackageMixin.Class = ReservationPackageImpl
