import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import EntertainmentBusinessMixin from './EntertainmentBusiness';

export interface NightClub extends Schema.EntertainmentBusiness, RdfResource {
}

export default function NightClubMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class NightClubClass extends EntertainmentBusinessMixin(Resource) implements NightClub {
  }
  return NightClubClass
}

class NightClubImpl extends NightClubMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<NightClub>) {
    super(arg)
    this.types.add(schema.NightClub)
    initializeProperties(this, init)
  }
}
NightClubMixin.shouldApply = (r: RdfResource) => r.types.has(schema.NightClub)
NightClubMixin.Class = NightClubImpl
