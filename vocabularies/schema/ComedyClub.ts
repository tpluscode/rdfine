import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import { EntertainmentBusinessMixin } from './EntertainmentBusiness';

export interface ComedyClub extends Schema.EntertainmentBusiness, RdfResource {
}

export function ComedyClubMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ComedyClubClass extends EntertainmentBusinessMixin(Resource) implements ComedyClub {
  }
  return ComedyClubClass
}

class ComedyClubImpl extends ComedyClubMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ComedyClub>) {
    super(arg, init)
    this.types.add(schema.ComedyClub)
  }
}
ComedyClubMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ComedyClub)
ComedyClubMixin.Class = ComedyClubImpl
