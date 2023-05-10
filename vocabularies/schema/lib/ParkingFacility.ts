import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CivicStructureMixin } from './CivicStructure.js';

export interface ParkingFacility<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CivicStructure<D>, rdfine.RdfResource<D> {
}

export function ParkingFacilityMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<ParkingFacility> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class ParkingFacilityClass extends CivicStructureMixin(Resource) implements Partial<ParkingFacility> {
  }
  return ParkingFacilityClass
}

class ParkingFacilityImpl extends ParkingFacilityMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ParkingFacility>) {
    super(arg, init)
    this.types.add(schema.ParkingFacility)
  }

  static readonly __mixins: Mixin[] = [ParkingFacilityMixin, CivicStructureMixin];
}
ParkingFacilityMixin.appliesTo = schema.ParkingFacility
ParkingFacilityMixin.Class = ParkingFacilityImpl

export const fromPointer = createFactory<ParkingFacility>([CivicStructureMixin, ParkingFacilityMixin], { types: [schema.ParkingFacility] });
