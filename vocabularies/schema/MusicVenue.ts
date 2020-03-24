import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import CivicStructureMixin from './CivicStructure';

export interface MusicVenue extends Schema.CivicStructure, RdfResource {
}

export default function MusicVenueMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MusicVenueClass extends CivicStructureMixin(Resource) implements MusicVenue {
  }
  return MusicVenueClass
}

class MusicVenueImpl extends MusicVenueMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<MusicVenue>) {
    super(arg)
    this.types.add(schema.MusicVenue)
    initializeProperties(this, init)
  }
}
MusicVenueMixin.shouldApply = (r: RdfResource) => r.types.has(schema.MusicVenue)
MusicVenueMixin.Class = MusicVenueImpl
