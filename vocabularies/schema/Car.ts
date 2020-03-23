import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import VehicleMixin from './Vehicle';

export interface Car extends Schema.Vehicle, RdfResource {
}

export default function CarMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CarClass extends VehicleMixin(Resource) implements Car {
  }
  return CarClass
}

class CarImpl extends CarMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.Car)
  }
}
CarMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Car)
CarMixin.Class = CarImpl
