import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { VesselMixin } from './Vessel';

export interface LymphaticVessel<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Vessel<D>, RdfResource<D> {
  originatesFrom: Schema.Vessel<D> | undefined;
  regionDrained: Schema.AnatomicalStructure<D> | Schema.AnatomicalSystem<D> | undefined;
  runsTo: Schema.Vessel<D> | undefined;
}

export function LymphaticVesselMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<LymphaticVessel> & RdfResourceCore> & Base {
  @namespace(schema)
  class LymphaticVesselClass extends VesselMixin(Resource) implements Partial<LymphaticVessel> {
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
