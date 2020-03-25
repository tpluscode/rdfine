import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import CivicStructureMixin from './CivicStructure';

export interface Airport extends Schema.CivicStructure, RdfResource {
  iataCode: string;
  icaoCode: string;
}

export default function AirportMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class AirportClass extends CivicStructureMixin(Resource) implements Airport {
    @property.literal()
    iataCode!: string;
    @property.literal()
    icaoCode!: string;
  }
  return AirportClass
}

class AirportImpl extends AirportMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<Airport>) {
    super(arg)
    this.types.add(schema.Airport)
    initializeProperties<Airport>(this, init)
  }
}
AirportMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Airport)
AirportMixin.Class = AirportImpl
