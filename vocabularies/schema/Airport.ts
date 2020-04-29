import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import { CivicStructureMixin } from './CivicStructure';

export interface Airport extends Schema.CivicStructure, RdfResource {
  iataCode: string;
  icaoCode: string;
}

export function AirportMixin<Base extends Constructor>(Resource: Base) {
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
  constructor(arg: ResourceNode, init?: Initializer<Airport>) {
    super(arg, init)
    this.types.add(schema.Airport)
  }
}
AirportMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Airport)
AirportMixin.Class = AirportImpl
