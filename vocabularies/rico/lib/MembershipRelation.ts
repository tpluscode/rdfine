import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { AgentToAgentRelationMixin } from './AgentToAgentRelation.js';

export interface MembershipRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.AgentToAgentRelation<D>, rdfine.RdfResource<D> {
  membershipRelationHasSource: Rico.Group<D> | undefined;
  membershipRelationHasTarget: Rico.Person<D> | undefined;
  membershipWithPosition: Rico.Position<D> | undefined;
}

export function MembershipRelationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<MembershipRelation> & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class MembershipRelationClass extends AgentToAgentRelationMixin(Resource) implements Partial<MembershipRelation> {
    @rdfine.property.resource({ implicitTypes: [rico.Group] })
    membershipRelationHasSource: Rico.Group | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Person] })
    membershipRelationHasTarget: Rico.Person | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Position] })
    membershipWithPosition: Rico.Position | undefined;
  }
  return MembershipRelationClass
}

class MembershipRelationImpl extends MembershipRelationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MembershipRelation>) {
    super(arg, init)
    this.types.add(rico.MembershipRelation)
  }

  static readonly __mixins: Mixin[] = [MembershipRelationMixin, AgentToAgentRelationMixin];
}
MembershipRelationMixin.appliesTo = rico.MembershipRelation
MembershipRelationMixin.Class = MembershipRelationImpl

export const fromPointer = createFactory<MembershipRelation>([AgentToAgentRelationMixin, MembershipRelationMixin], { types: [rico.MembershipRelation] });
