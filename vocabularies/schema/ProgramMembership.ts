import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { IntangibleMixin } from './Intangible';

export interface ProgramMembership extends Schema.Intangible, RdfResource {
  hostingOrganization: Schema.Organization | undefined;
  member: Schema.Organization | Schema.Person | undefined;
  members: Schema.Organization | Schema.Person | undefined;
  membershipNumber: string | undefined;
  programName: string | undefined;
}

export function ProgramMembershipMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ProgramMembershipClass extends IntangibleMixin(Resource) implements ProgramMembership {
    @property.resource()
    hostingOrganization: Schema.Organization | undefined;
    @property.resource()
    member: Schema.Organization | Schema.Person | undefined;
    @property.resource()
    members: Schema.Organization | Schema.Person | undefined;
    @property.literal()
    membershipNumber: string | undefined;
    @property.literal()
    programName: string | undefined;
  }
  return ProgramMembershipClass
}

class ProgramMembershipImpl extends ProgramMembershipMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ProgramMembership>) {
    super(arg, init)
    this.types.add(schema.ProgramMembership)
  }

  static readonly __mixins: Mixin[] = [ProgramMembershipMixin, IntangibleMixin];
}
ProgramMembershipMixin.appliesTo = schema.ProgramMembership
ProgramMembershipMixin.Class = ProgramMembershipImpl
