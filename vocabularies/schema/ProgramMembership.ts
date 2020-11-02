import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { IntangibleMixin } from './Intangible';

export interface ProgramMembership<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Intangible<D>, RdfResource<D> {
  hostingOrganization: Schema.Organization<D> | undefined;
  member: Schema.Organization<D> | Schema.Person<D> | undefined;
  members: Schema.Organization<D> | Schema.Person<D> | undefined;
  membershipNumber: string | undefined;
  membershipPointsEarned: Schema.QuantitativeValue<D> | undefined;
  membershipPointsEarnedLiteral: number | undefined;
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
    @property.resource()
    membershipPointsEarned: Schema.QuantitativeValue | undefined;
    @property.literal({ path: schema.membershipPointsEarned, type: Number })
    membershipPointsEarnedLiteral: number | undefined;
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
