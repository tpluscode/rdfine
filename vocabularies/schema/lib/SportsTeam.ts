import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { SportsOrganizationMixin } from './SportsOrganization';

export interface SportsTeam<ID extends ResourceNode = ResourceNode> extends Schema.SportsOrganization<ID>, RdfResource<ID> {
  athlete: Schema.Person<SiblingNode<ID>> | undefined;
  coach: Schema.Person<SiblingNode<ID>> | undefined;
  gender: string | undefined;
  genderTerm: Schema.GenderType | undefined;
}

export function SportsTeamMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class SportsTeamClass extends SportsOrganizationMixin(Resource) implements SportsTeam {
    @property.resource()
    athlete: Schema.Person | undefined;
    @property.resource()
    coach: Schema.Person | undefined;
    @property.literal()
    gender: string | undefined;
    @property({ path: schema.gender })
    genderTerm: Schema.GenderType | undefined;
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
