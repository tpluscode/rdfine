import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ReservationMixin } from './Reservation.js';

export interface ReservationPackage<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Reservation<D>, RdfResource<D> {
  subReservation: Schema.Reservation<D> | undefined;
}

export function ReservationPackageMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<ReservationPackage> & RdfResourceCore> & Base {
  @namespace(schema)
  class ReservationPackageClass extends ReservationMixin(Resource) implements Partial<ReservationPackage> {
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

export const fromPointer = createFactory<ReservationPackage>([ReservationMixin, ReservationPackageMixin], { types: [schema.ReservationPackage] });
