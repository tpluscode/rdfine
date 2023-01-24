import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '..';
import { AgentMixin } from './Agent';

export interface Position<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Agent<D>, RdfResource<D> {
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

export function PositionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Position> & RdfResourceCore> & Base {
  @namespace(rico)
  class PositionClass extends AgentMixin(Resource) implements Partial<Position> {
    @property.resource({ implicitTypes: [rico.IntellectualPropertyRightsRelation] })
    agentIsSourceOfIntellectualPropertyRightsRelation: Rico.IntellectualPropertyRightsRelation | undefined;
    @property.resource({ implicitTypes: [rico.OwnershipRelation] })
    agentIsSourceOfOwnershipRelation: Rico.OwnershipRelation | undefined;
    @property.resource({ implicitTypes: [rico.AuthorshipRelation] })
    agentIsTargetOfAuthorshipRelation: Rico.AuthorshipRelation | undefined;
    @property.resource({ implicitTypes: [rico.Group] })
    existsOrExistedIn: Rico.Group | undefined;
    @property.resource({ implicitTypes: [rico.Record] })
    isAuthorOf: Rico.Record | undefined;
    @property.resource()
    isOrWasHolderOfIntellectualPropertyRightsOf: Rico.Instantiation | Rico.RecordResource | undefined;
    @property.resource({ implicitTypes: [rico.Person] })
    isOrWasOccupiedBy: Rico.Person | undefined;
    @property.resource({ implicitTypes: [rico.Thing] })
    isOrWasOwnerOf: Rico.Thing | undefined;
    @property.resource({ implicitTypes: [rico.LeadershipRelation] })
    positionIsContextOfLeadershipRelation: Rico.LeadershipRelation | undefined;
    @property.resource({ implicitTypes: [rico.MembershipRelation] })
    positionIsContextOfMembershipRelation: Rico.MembershipRelation | undefined;
    @property.resource({ implicitTypes: [rico.PositionToGroupRelation] })
    positionIsSourceOfPositionToGroupRelation: Rico.PositionToGroupRelation | undefined;
    @property.resource({ implicitTypes: [rico.PositionHoldingRelation] })
    positionIsTargetOfPositionHoldingRelation: Rico.PositionHoldingRelation | undefined;
  }
  return PositionClass
}

class PositionImpl extends PositionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Position>) {
    super(arg, init)
    this.types.add(rico.Position)
  }

  static readonly __mixins: Mixin[] = [PositionMixin, AgentMixin];
}
PositionMixin.appliesTo = rico.Position
PositionMixin.Class = PositionImpl

export const fromPointer = createFactory<Position>([AgentMixin, PositionMixin], { types: [rico.Position] });
