import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import EntertainmentBusinessMixin from './EntertainmentBusiness';

export interface ComedyClub extends Schema.EntertainmentBusiness, RdfResource {
}

export default function ComedyClubMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ComedyClubClass extends EntertainmentBusinessMixin(Resource) implements ComedyClub {
  }
  return ComedyClubClass
}

class ComedyClubImpl extends ComedyClubMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.ComedyClub)
  }
}
ComedyClubMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ComedyClub)
ComedyClubMixin.Class = ComedyClubImpl
