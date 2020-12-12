import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CivicStructureMixin } from './CivicStructure';

export interface Airport<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CivicStructure<D>, RdfResource<D> {
  iataCode: string | undefined;
  icaoCode: string | undefined;
}

export function AirportMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Airport> & RdfResourceCore> & Base {
  @namespace(schema)
  class AirportClass extends CivicStructureMixin(Resource) implements Partial<Airport> {
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
