import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { VehicleMixin } from './Vehicle';

export interface MotorizedBicycle<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Vehicle<D>, RdfResource<D> {
}

export function MotorizedBicycleMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<MotorizedBicycle> & RdfResourceCore> & Base {
  @namespace(schema)
  class MotorizedBicycleClass extends VehicleMixin(Resource) implements Partial<MotorizedBicycle> {
  }
  return MotorizedBicycleClass
}

class MotorizedBicycleImpl extends MotorizedBicycleMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MotorizedBicycle>) {
    super(arg, init)
    this.types.add(schema.MotorizedBicycle)
  }

  static readonly __mixins: Mixin[] = [MotorizedBicycleMixin, VehicleMixin];
}
MotorizedBicycleMixin.appliesTo = schema.MotorizedBicycle
MotorizedBicycleMixin.Class = MotorizedBicycleImpl

export const fromPointer = createFactory<MotorizedBicycle>([VehicleMixin, MotorizedBicycleMixin], { types: [schema.MotorizedBicycle] });
