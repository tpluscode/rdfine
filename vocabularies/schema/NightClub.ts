import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<NightClub>) {
    super(arg, init)
    this.types.add(schema.NightClub)
  }
}
NightClubMixin.shouldApply = (r: RdfResource) => r.types.has(schema.NightClub)
NightClubMixin.Class = NightClubImpl
