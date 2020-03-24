import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import IntangibleMixin from './Intangible';

export interface ProgramMembership extends Schema.Intangible, RdfResource {
  hostingOrganization: Schema.Organization;
  member: Schema.Organization | Schema.Person;
  members: Schema.Organization | Schema.Person;
  membershipNumber: string;
  programName: string;
}

export default function ProgramMembershipMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ProgramMembershipClass extends IntangibleMixin(Resource) implements ProgramMembership {
    @property.resource()
    hostingOrganization!: Schema.Organization;
    @property.resource()
    member!: Schema.Organization | Schema.Person;
    @property.resource()
    members!: Schema.Organization | Schema.Person;
    @property.literal()
    membershipNumber!: string;
    @property.literal()
    programName!: string;
  }
  return ProgramMembershipClass
}

class ProgramMembershipImpl extends ProgramMembershipMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<ProgramMembership>) {
    super(arg)
    this.types.add(schema.ProgramMembership)
    initializeProperties(this, init)
  }
}
ProgramMembershipMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ProgramMembership)
ProgramMembershipMixin.Class = ProgramMembershipImpl
