import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { CivicStructureMixin } from './CivicStructure';
import { EmergencyServiceMixin } from './EmergencyService';

export interface PoliceStation extends Schema.CivicStructure, Schema.EmergencyService, RdfResource {
}

export function PoliceStationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PoliceStationClass extends EmergencyServiceMixin(CivicStructureMixin(Resource)) implements PoliceStation {
  }
  return PoliceStationClass
}

class PoliceStationImpl extends PoliceStationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<PoliceStation>) {
    super(arg, init)
    this.types.add(schema.PoliceStation)
  }

  static readonly __mixins: Mixin[] = [PoliceStationMixin, CivicStructureMixin, EmergencyServiceMixin];
}
PoliceStationMixin.appliesTo = schema.PoliceStation
PoliceStationMixin.Class = PoliceStationImpl
