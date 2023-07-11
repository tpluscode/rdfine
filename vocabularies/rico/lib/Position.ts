import * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as Rico from '../index.js';
import { AgentMixin } from './Agent.js';

export interface Position<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Agent<D>, rdfine.RdfResource<D> {
  agentIsSourceOfIntellectualPropertyRightsRelation: Rico.IntellectualPropertyRightsRelation<D> | undefined;
  agentIsSourceOfOwnershipRelation: Rico.OwnershipRelation<D> | undefined;
  agentIsTargetOfAuthorshipRelation: Rico.AuthorshipRelation<D> | undefined;
  existsOrExistedIn: Rico.Group<D> | undefined;
  isAuthorOf: Rico.Record<D> | undefined;
  isOrWasHolderOfIntellectualPropertyRightsOf: Rico.Instantiation<D> | Rico.RecordResource<D> | undefined;
  isOrWasOccupiedBy: Rico.Person<D> | undefined;
  isOrWasOwnerOf: Rico.Thing<D> | undefined;
  positionIsContextOfLeadershipRelation: Rico.LeadershipRelation<D> | undefined;
  positionIsContextOfMembershipRelation: Rico.MembershipRelation<D> | undefined;
  positionIsSourceOfPositionToGroupRelation: Rico.PositionToGroupRelation<D> | undefined;
  positionIsTargetOfPositionHoldingRelation: Rico.PositionHoldingRelation<D> | undefined;
}

export function PositionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Position & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class PositionClass extends AgentMixin(Resource) {
    @rdfine.property.resource({ implicitTypes: [rico.IntellectualPropertyRightsRelation] })
    agentIsSourceOfIntellectualPropertyRightsRelation: Rico.IntellectualPropertyRightsRelation | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.OwnershipRelation] })
    agentIsSourceOfOwnershipRelation: Rico.OwnershipRelation | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.AuthorshipRelation] })
    agentIsTargetOfAuthorshipRelation: Rico.AuthorshipRelation | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Group] })
    existsOrExistedIn: Rico.Group | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Record] })
    isAuthorOf: Rico.Record | undefined;
    @rdfine.property.resource()
    isOrWasHolderOfIntellectualPropertyRightsOf: Rico.Instantiation | Rico.RecordResource | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Person] })
    isOrWasOccupiedBy: Rico.Person | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Thing] })
    isOrWasOwnerOf: Rico.Thing | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.LeadershipRelation] })
    positionIsContextOfLeadershipRelation: Rico.LeadershipRelation | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.MembershipRelation] })
    positionIsContextOfMembershipRelation: Rico.MembershipRelation | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.PositionToGroupRelation] })
    positionIsSourceOfPositionToGroupRelation: Rico.PositionToGroupRelation | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.PositionHoldingRelation] })
    positionIsTargetOfPositionHoldingRelation: Rico.PositionHoldingRelation | undefined;
  }
  return PositionClass as any
}
PositionMixin.appliesTo = rico.Position

export const factory = (env: RdfineEnvironment) => createFactory<Position>([AgentMixin, PositionMixin], { types: [rico.Position] }, env);
