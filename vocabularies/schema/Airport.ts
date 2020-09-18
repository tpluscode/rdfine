import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { CivicStructureMixin } from './CivicStructure';

export interface Airport extends Schema.CivicStructure, RdfResource {
  iataCode: string | undefined;
  icaoCode: string | undefined;
}

export function AirportMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class AirportClass extends CivicStructureMixin(Resource) implements Airport {
    @property.literal()
    iataCode: string | undefined;
    @property.literal()
    icaoCode: string | undefined;
  }
  return AirportClass
}

class AirportImpl extends AirportMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Airport>) {
    super(arg, init)
    this.types.add(schema.Airport)
  }

  static readonly __mixins: Mixin[] = [AirportMixin, CivicStructureMixin];
}
AirportMixin.appliesTo = schema.Airport
AirportMixin.Class = AirportImpl
