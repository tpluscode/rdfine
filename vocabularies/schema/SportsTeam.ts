import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { SportsOrganizationMixin } from './SportsOrganization';

export interface SportsTeam extends Schema.SportsOrganization, RdfResource {
  athlete: Schema.Person;
  coach: Schema.Person;
}

export function SportsTeamMixin<Base extends Constructor>(Resource: Base) {
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
  constructor(arg: ResourceNode, init?: Initializer<SportsTeam>) {
    super(arg, init)
    this.types.add(schema.SportsTeam)
  }

  static readonly __mixins: Mixin[] = [SportsTeamMixin, SportsOrganizationMixin];
}
SportsTeamMixin.appliesTo = schema.SportsTeam
SportsTeamMixin.Class = SportsTeamImpl
