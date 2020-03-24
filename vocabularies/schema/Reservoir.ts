import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import BodyOfWaterMixin from './BodyOfWater';

export interface Reservoir extends Schema.BodyOfWater, RdfResource {
}

export default function ReservoirMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ReservoirClass extends BodyOfWaterMixin(Resource) implements Reservoir {
  }
  return ReservoirClass
}

class ReservoirImpl extends ReservoirMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.Reservoir)
  }
}
ReservoirMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Reservoir)
ReservoirMixin.Class = ReservoirImpl
