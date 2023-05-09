import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { AgentMixin } from './Agent.js';

export interface Group<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Agent<D>, rdfine.RdfResource<D> {
  agentIsSourceOfIntellectualPropertyRightsRelation: Rico.IntellectualPropertyRightsRelation<D> | undefined;
  agentIsSourceOfOwnershipRelation: Rico.OwnershipRelation<D> | undefined;
  agentIsTargetOfAuthorshipRelation: Rico.AuthorshipRelation<D> | undefined;
  groupIsSourceOfGroupSubdivisionRelation: Rico.GroupSubdivisionRelation<D> | undefined;
  groupIsSourceOfMembershipRelation: Rico.MembershipRelation<D> | undefined;
  groupIsTargetOfGroupSubdivisionRelation: Rico.GroupSubdivisionRelation<D> | undefined;
  groupIsTargetOfLeadershipRelation: Rico.LeadershipRelation<D> | undefined;
  groupIsTargetOfPositionToGroupRelation: Rico.PositionToGroupRelation<D> | undefined;
  hasOrHadDemographicGroup: Rico.DemographicGroup<D> | undefined;
  hasOrHadLeader: Rico.Person<D> | undefined;
  hasOrHadMember: Rico.Person<D> | undefined;
  hasOrHadPosition: Rico.Position<D> | undefined;
  hasOrHadSubdivision: Rico.Group<D> | undefined;
  isAuthorOf: Rico.Record<D> | undefined;
  isOrWasHolderOfIntellectualPropertyRightsOf: Rico.Instantiation<D> | Rico.RecordResource<D> | undefined;
  isOrWasOwnerOf: Rico.Thing<D> | undefined;
  isOrWasSubdivisionOf: Rico.Group<D> | undefined;
}

export function GroupMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Group> & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class GroupClass extends AgentMixin(Resource) implements Partial<Group> {
    @rdfine.property.resource({ implicitTypes: [rico.IntellectualPropertyRightsRelation] })
    agentIsSourceOfIntellectualPropertyRightsRelation: Rico.IntellectualPropertyRightsRelation | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.OwnershipRelation] })
    agentIsSourceOfOwnershipRelation: Rico.OwnershipRelation | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.AuthorshipRelation] })
    agentIsTargetOfAuthorshipRelation: Rico.AuthorshipRelation | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.GroupSubdivisionRelation] })
    groupIsSourceOfGroupSubdivisionRelation: Rico.GroupSubdivisionRelation | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.MembershipRelation] })
    groupIsSourceOfMembershipRelation: Rico.MembershipRelation | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.GroupSubdivisionRelation] })
    groupIsTargetOfGroupSubdivisionRelation: Rico.GroupSubdivisionRelation | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.LeadershipRelation] })
    groupIsTargetOfLeadershipRelation: Rico.LeadershipRelation | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.PositionToGroupRelation] })
    groupIsTargetOfPositionToGroupRelation: Rico.PositionToGroupRelation | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.DemographicGroup] })
    hasOrHadDemographicGroup: Rico.DemographicGroup | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Person] })
    hasOrHadLeader: Rico.Person | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Person] })
    hasOrHadMember: Rico.Person | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Position] })
    hasOrHadPosition: Rico.Position | undefined;
    @rdfine.property.resource({ as: [GroupMixin] })
    hasOrHadSubdivision: Rico.Group | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Record] })
    isAuthorOf: Rico.Record | undefined;
    @rdfine.property.resource()
    isOrWasHolderOfIntellectualPropertyRightsOf: Rico.Instantiation | Rico.RecordResource | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Thing] })
    isOrWasOwnerOf: Rico.Thing | undefined;
    @rdfine.property.resource({ as: [GroupMixin] })
    isOrWasSubdivisionOf: Rico.Group | undefined;
  }
  return GroupClass
}

class GroupImpl extends GroupMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Group>) {
    super(arg, init)
    this.types.add(rico.Group)
  }

  static readonly __mixins: Mixin[] = [GroupMixin, AgentMixin];
}
GroupMixin.appliesTo = rico.Group
GroupMixin.Class = GroupImpl

export const fromPointer = createFactory<Group>([AgentMixin, GroupMixin], { types: [rico.Group] });
