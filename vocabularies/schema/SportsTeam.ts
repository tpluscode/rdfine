import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import SportsOrganizationMixin from './SportsOrganization';

export interface SportsTeam extends Schema.SportsOrganization, RdfResource {
  athlete: Schema.Person;
  coach: Schema.Person;
}

export default function SportsTeamMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class SportsTeamClass extends SportsOrganizationMixin(Resource) implements SportsTeam {
    @property.resource()
    athlete!: Schema.Person;
    @property.resource()
    coach!: Schema.Person;
  }
  return SportsTeamClass
}

class SportsTeamImpl extends SportsTeamMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<SportsTeam>) {
    super(arg)
    this.types.add(schema.SportsTeam)
    initializeProperties<SportsTeam>(this, init)
  }
}
SportsTeamMixin.shouldApply = (r: RdfResource) => r.types.has(schema.SportsTeam)
SportsTeamMixin.Class = SportsTeamImpl
