import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CivicStructureMixin } from './CivicStructure.js';

export interface Airport<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CivicStructure<D>, rdfine.RdfResource<D> {
  iataCode: string | undefined;
  icaoCode: string | undefined;
}

export function AirportMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Airport> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class AirportClass extends CivicStructureMixin(Resource) implements Partial<Airport> {
    @rdfine.property.literal()
    iataCode: string | undefined;
    @rdfine.property.literal()
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

export const fromPointer = createFactory<Airport>([CivicStructureMixin, AirportMixin], { types: [schema.Airport] });
