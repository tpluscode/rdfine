import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<StadiumOrArena>) {
    super(arg)
    this.types.add(schema.StadiumOrArena)
    initializeProperties(this, init)
  }
}
StadiumOrArenaMixin.shouldApply = (r: RdfResource) => r.types.has(schema.StadiumOrArena)
StadiumOrArenaMixin.Class = StadiumOrArenaImpl
