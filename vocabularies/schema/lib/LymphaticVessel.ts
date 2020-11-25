import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { VesselMixin } from './Vessel';

export interface LymphaticVessel<ID extends ResourceNode = ResourceNode> extends Schema.Vessel<ID>, RdfResource<ID> {
  originatesFrom: Schema.Vessel<SiblingNode<ID>> | undefined;
  regionDrained: Schema.AnatomicalStructure<SiblingNode<ID>> | Schema.AnatomicalSystem<SiblingNode<ID>> | undefined;
  runsTo: Schema.Vessel<SiblingNode<ID>> | undefined;
}

export function LymphaticVesselMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class LymphaticVesselClass extends VesselMixin(Resource) implements LymphaticVessel {
    @property.resource()
    originatesFrom: Schema.Vessel | undefined;
    @property.resource()
    regionDrained: Schema.AnatomicalStructure | Schema.AnatomicalSystem | undefined;
    @property.resource()
    runsTo: Schema.Vessel | undefined;
  }
  return LymphaticVesselClass
}

class LymphaticVesselImpl extends LymphaticVesselMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<LymphaticVessel>) {
    super(arg, init)
    this.types.add(schema.LymphaticVessel)
  }

  static readonly __mixins: Mixin[] = [LymphaticVesselMixin, VesselMixin];
}
LymphaticVesselMixin.appliesTo = schema.LymphaticVessel
LymphaticVesselMixin.Class = LymphaticVesselImpl
