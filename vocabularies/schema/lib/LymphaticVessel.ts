import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { VesselMixin } from './Vessel.js';

export interface LymphaticVessel<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Vessel<D>, rdfine.RdfResource<D> {
  originatesFrom: Schema.Vessel<D> | undefined;
  regionDrained: Schema.AnatomicalStructure<D> | Schema.AnatomicalSystem<D> | undefined;
  runsTo: Schema.Vessel<D> | undefined;
}

export function LymphaticVesselMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<LymphaticVessel & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class LymphaticVesselClass extends VesselMixin(Resource) {
    @rdfine.property.resource()
    originatesFrom: Schema.Vessel | undefined;
    @rdfine.property.resource()
    regionDrained: Schema.AnatomicalStructure | Schema.AnatomicalSystem | undefined;
    @rdfine.property.resource()
    runsTo: Schema.Vessel | undefined;
  }
  return LymphaticVesselClass as any
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

export const fromPointer = createFactory<LymphaticVessel>([VesselMixin, LymphaticVesselMixin], { types: [schema.LymphaticVessel] });
