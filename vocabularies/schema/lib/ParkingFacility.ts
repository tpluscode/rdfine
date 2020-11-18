import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CivicStructureMixin } from './CivicStructure';

export interface ParkingFacility<ID extends ResourceNode = ResourceNode> extends Schema.CivicStructure<ID>, RdfResource<ID> {
}

export function ParkingFacilityMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ParkingFacilityClass extends CivicStructureMixin(Resource) implements ParkingFacility {
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
