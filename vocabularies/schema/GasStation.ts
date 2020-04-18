import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import AutomotiveBusinessMixin from './AutomotiveBusiness';

export interface GasStation extends Schema.AutomotiveBusiness, RdfResource {
}

export default function GasStationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class GasStationClass extends AutomotiveBusinessMixin(Resource) implements GasStation {
  }
  return GasStationClass
}

class GasStationImpl extends GasStationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<GasStation>) {
    super(arg, init)
    this.types.add(schema.GasStation)
  }
}
GasStationMixin.shouldApply = (r: RdfResource) => r.types.has(schema.GasStation)
GasStationMixin.Class = GasStationImpl
