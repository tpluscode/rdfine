import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import { BodyOfWaterMixin } from './BodyOfWater';

export interface Reservoir extends Schema.BodyOfWater, RdfResource {
}

export function ReservoirMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ReservoirClass extends BodyOfWaterMixin(Resource) implements Reservoir {
  }
  return ReservoirClass
}

class ReservoirImpl extends ReservoirMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Reservoir>) {
    super(arg, init)
    this.types.add(schema.Reservoir)
  }
}
ReservoirMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Reservoir)
ReservoirMixin.Class = ReservoirImpl
