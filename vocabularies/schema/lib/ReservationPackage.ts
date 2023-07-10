import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ReservationMixin } from './Reservation.js';

export interface ReservationPackage<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Reservation<D>, rdfine.RdfResource<D> {
  subReservation: Schema.Reservation<D> | undefined;
}

export function ReservationPackageMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<ReservationPackage & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class ReservationPackageClass extends ReservationMixin(Resource) {
    @rdfine.property.resource()
    subReservation: Schema.Reservation | undefined;
  }
  return ReservationPackageClass as any
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

export const fromPointer = createFactory<ReservationPackage>([ReservationMixin, ReservationPackageMixin], { types: [schema.ReservationPackage] });
