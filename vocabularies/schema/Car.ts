import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import { VehicleMixin } from './Vehicle';

export interface Car extends Schema.Vehicle, RdfResource {
}

export function CarMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CarClass extends VehicleMixin(Resource) implements Car {
  }
  return CarClass
}

class CarImpl extends CarMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Car>) {
    super(arg, init)
    this.types.add(schema.Car)
  }
}
CarMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Car)
CarMixin.Class = CarImpl
