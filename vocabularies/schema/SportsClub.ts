import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import SportsActivityLocationMixin from './SportsActivityLocation';

export interface SportsClub extends Schema.SportsActivityLocation, RdfResource {
}

export default function SportsClubMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class SportsClubClass extends SportsActivityLocationMixin(Resource) implements SportsClub {
  }
  return SportsClubClass
}

class SportsClubImpl extends SportsClubMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.SportsClub)
  }
}
SportsClubMixin.shouldApply = (r: RdfResource) => r.types.has(schema.SportsClub)
SportsClubMixin.Class = SportsClubImpl
