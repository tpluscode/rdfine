import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { VehicleMixin } from './Vehicle';

export interface Motorcycle<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Vehicle<D>, RdfResource<D> {
}

export function MotorcycleMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MotorcycleClass extends VehicleMixin(Resource) implements Motorcycle {
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
