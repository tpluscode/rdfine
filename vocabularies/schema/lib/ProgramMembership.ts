import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { IntangibleMixin } from './Intangible.js';

export interface ProgramMembership<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Intangible<D>, rdfine.RdfResource<D> {
  hostingOrganization: Schema.Organization<D> | undefined;
  member: Schema.Organization<D> | Schema.Person<D> | undefined;
  members: Schema.Organization<D> | Schema.Person<D> | undefined;
  membershipNumber: string | undefined;
  membershipPointsEarned: Schema.QuantitativeValue<D> | undefined;
  membershipPointsEarnedLiteral: number | undefined;
  programName: string | undefined;
}

export function ProgramMembershipMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<ProgramMembership> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class ProgramMembershipClass extends IntangibleMixin(Resource) implements Partial<ProgramMembership> {
    @rdfine.property.resource()
    hostingOrganization: Schema.Organization | undefined;
    @rdfine.property.resource()
    member: Schema.Organization | Schema.Person | undefined;
    @rdfine.property.resource()
    members: Schema.Organization | Schema.Person | undefined;
    @rdfine.property.literal()
    membershipNumber: string | undefined;
    @rdfine.property.resource()
    membershipPointsEarned: Schema.QuantitativeValue | undefined;
    @rdfine.property.literal({ path: schema.membershipPointsEarned, type: Number })
    membershipPointsEarnedLiteral: number | undefined;
    @rdfine.property.literal()
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

export const fromPointer = createFactory<ProgramMembership>([IntangibleMixin, ProgramMembershipMixin], { types: [schema.ProgramMembership] });
