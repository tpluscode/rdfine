import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { VehicleMixin } from './Vehicle.js';

export interface MotorizedBicycle<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Vehicle<D>, rdfine.RdfResource<D> {
}

export function MotorizedBicycleMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<MotorizedBicycle & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class MotorizedBicycleClass extends VehicleMixin(Resource) {
  }
  return MotorizedBicycleClass as any
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
