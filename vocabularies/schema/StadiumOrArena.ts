import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import CivicStructureMixin from './CivicStructure';
import SportsActivityLocationMixin from './SportsActivityLocation';

export interface StadiumOrArena extends Schema.CivicStructure, Schema.SportsActivityLocation, RdfResource {
}

export default function StadiumOrArenaMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class StadiumOrArenaClass extends SportsActivityLocationMixin(CivicStructureMixin(Resource)) implements StadiumOrArena {
  }
  return StadiumOrArenaClass
}

class StadiumOrArenaImpl extends StadiumOrArenaMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<StadiumOrArena>) {
    super(arg, init)
    this.types.add(schema.StadiumOrArena)
  }
}
StadiumOrArenaMixin.shouldApply = (r: RdfResource) => r.types.has(schema.StadiumOrArena)
StadiumOrArenaMixin.Class = StadiumOrArenaImpl
