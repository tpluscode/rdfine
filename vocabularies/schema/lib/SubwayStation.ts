import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CivicStructureMixin } from './CivicStructure';

export interface SubwayStation<ID extends ResourceNode = ResourceNode> extends Schema.CivicStructure<ID>, RdfResource<ID> {
}

export function SubwayStationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class SubwayStationClass extends CivicStructureMixin(Resource) implements SubwayStation {
  }
  return SubwayStationClass
}

class SubwayStationImpl extends SubwayStationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SubwayStation>) {
    super(arg, init)
    this.types.add(schema.SubwayStation)
  }

  static readonly __mixins: Mixin[] = [SubwayStationMixin, CivicStructureMixin];
}
SubwayStationMixin.appliesTo = schema.SubwayStation
SubwayStationMixin.Class = SubwayStationImpl
