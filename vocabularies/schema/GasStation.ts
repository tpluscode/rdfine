import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.GasStation)
  }
}
GasStationMixin.shouldApply = (r: RdfResource) => r.types.has(schema.GasStation)
GasStationMixin.Class = GasStationImpl
