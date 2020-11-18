import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CivicStructureMixin } from './CivicStructure';

export interface BusStation<ID extends ResourceNode = ResourceNode> extends Schema.CivicStructure<ID>, RdfResource<ID> {
}

export function BusStationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class BusStationClass extends CivicStructureMixin(Resource) implements BusStation {
  }
  return BusStationClass
}

class BusStationImpl extends BusStationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<BusStation>) {
    super(arg, init)
    this.types.add(schema.BusStation)
  }

  static readonly __mixins: Mixin[] = [BusStationMixin, CivicStructureMixin];
}
BusStationMixin.appliesTo = schema.BusStation
BusStationMixin.Class = BusStationImpl
