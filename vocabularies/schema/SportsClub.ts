import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<SportsClub>) {
    super(arg)
    this.types.add(schema.SportsClub)
    initializeProperties<SportsClub>(this, init)
  }
}
SportsClubMixin.shouldApply = (r: RdfResource) => r.types.has(schema.SportsClub)
SportsClubMixin.Class = SportsClubImpl
