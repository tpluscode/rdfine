import * as rdfine from '@tpluscode/rdfine';
import { createFactory, Factory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '../index.js';
import { VehicleMixin } from './Vehicle.js';

export interface MotorizedBicycle<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Vehicle<D>, rdfine.RdfResource<D> {
}

declare global {
  interface SchemaVocabulary {
    MotorizedBicycle: Factory<Schema.MotorizedBicycle>;
  }
}

export function MotorizedBicycleMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<MotorizedBicycle & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class MotorizedBicycleClass extends VehicleMixin(Resource) {
  }
  return MotorizedBicycleClass as any
}
MotorizedBicycleMixin.appliesTo = schema.MotorizedBicycle
MotorizedBicycleMixin.createFactory = (env: RdfineEnvironment) => createFactory<MotorizedBicycle>([VehicleMixin, MotorizedBicycleMixin], { types: [schema.MotorizedBicycle] }, env)
