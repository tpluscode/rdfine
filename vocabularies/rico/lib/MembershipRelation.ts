import * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as Rico from '../index.js';
import { AgentToAgentRelationMixin } from './AgentToAgentRelation.js';

export interface MembershipRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.AgentToAgentRelation<D>, rdfine.RdfResource<D> {
  membershipRelationHasSource: Rico.Group<D> | undefined;
  membershipRelationHasTarget: Rico.Person<D> | undefined;
  membershipWithPosition: Rico.Position<D> | undefined;
}

export function MembershipRelationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<MembershipRelation & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class MembershipRelationClass extends AgentToAgentRelationMixin(Resource) {
    @rdfine.property.resource({ implicitTypes: [rico.Group] })
    membershipRelationHasSource: Rico.Group | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Person] })
    membershipRelationHasTarget: Rico.Person | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Position] })
    membershipWithPosition: Rico.Position | undefined;
  }
  return MembershipRelationClass as any
}
MembershipRelationMixin.appliesTo = rico.MembershipRelation

export const factory = (env: RdfineEnvironment) => createFactory<MembershipRelation>([AgentToAgentRelationMixin, MembershipRelationMixin], { types: [rico.MembershipRelation] }, env);
