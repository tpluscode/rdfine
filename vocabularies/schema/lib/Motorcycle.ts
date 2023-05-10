import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { VehicleMixin } from './Vehicle.js';

export interface Motorcycle<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Vehicle<D>, rdfine.RdfResource<D> {
}

export function MotorcycleMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Motorcycle> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class MotorcycleClass extends VehicleMixin(Resource) implements Partial<Motorcycle> {
  }
  return MotorcycleClass
}

class MotorcycleImpl extends MotorcycleMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Motorcycle>) {
    super(arg, init)
    this.types.add(schema.Motorcycle)
  }

  static readonly __mixins: Mixin[] = [MotorcycleMixin, VehicleMixin];
}
MotorcycleMixin.appliesTo = schema.Motorcycle
MotorcycleMixin.Class = MotorcycleImpl

export const fromPointer = createFactory<Motorcycle>([VehicleMixin, MotorcycleMixin], { types: [schema.Motorcycle] });
