import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { AgentMixin } from './Agent.js';

export interface Person<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Agent<D>, rdfine.RdfResource<D> {
  agentIsSourceOfIntellectualPropertyRightsRelation: Rico.IntellectualPropertyRightsRelation<D> | undefined;
  agentIsSourceOfOwnershipRelation: Rico.OwnershipRelation<D> | undefined;
  agentIsTargetOfAuthorshipRelation: Rico.AuthorshipRelation<D> | undefined;
  birthDate: RDF.Literal | undefined;
  deathDate: RDF.Literal | undefined;
  hasAncestor: Rico.Person<D> | undefined;
  hasBirthDate: Rico.Date<D> | undefined;
  hasChild: Rico.Person<D> | undefined;
  hasDeathDate: Rico.Date<D> | undefined;
  hasDescendant: Rico.Person<D> | undefined;
  hasFamilyAssociationWith: Rico.Person<D> | undefined;
  hasOrHadCorrespondent: Rico.Person<D> | undefined;
  hasOrHadDemographicGroup: Rico.DemographicGroup<D> | undefined;
  hasOrHadOccupationOfType: Rico.OccupationType<D> | undefined;
  hasOrHadSpouse: Rico.Person<D> | undefined;
  hasOrHadStudent: Rico.Person<D> | undefined;
  hasOrHadTeacher: Rico.Person<D> | undefined;
  hasSibling: Rico.Person<D> | undefined;
  isAuthorOf: Rico.Record<D> | undefined;
  isChildOf: Rico.Person<D> | undefined;
  isOrWasHolderOfIntellectualPropertyRightsOf: Rico.Instantiation<D> | Rico.RecordResource<D> | undefined;
  isOrWasLeaderOf: Rico.Group<D> | undefined;
  isOrWasMemberOf: Rico.Group<D> | undefined;
  isOrWasOwnerOf: Rico.Thing<D> | undefined;
  knownBy: Rico.Person<D> | undefined;
  knows: Rico.Person<D> | undefined;
  knowsOf: Rico.Person<D> | undefined;
  occupiesOrOccupied: Rico.Position<D> | undefined;
  personHasCorrespondenceRelation: Rico.CorrespondenceRelation<D> | undefined;
  personHasFamilyRelation: Rico.FamilyRelation<D> | undefined;
  personHasKnowingRelation: Rico.KnowingRelation<D> | undefined;
  personHasSiblingRelation: Rico.SiblingRelation<D> | undefined;
  personHasSpouseRelation: Rico.SpouseRelation<D> | undefined;
  personIsSourceOfChildRelation: Rico.ChildRelation<D> | undefined;
  personIsSourceOfDescendanceRelation: Rico.DescendanceRelation<D> | undefined;
  personIsSourceOfKnowingOfRelation: Rico.KnowingOfRelation<D> | undefined;
  personIsSourceOfLeadershipRelation: Rico.LeadershipRelation<D> | undefined;
  personIsSourceOfPositionHoldingRelation: Rico.PositionHoldingRelation<D> | undefined;
  personIsSourceOfTeachingRelation: Rico.TeachingRelation<D> | undefined;
  personIsTargetOfChildRelation: Rico.ChildRelation<D> | undefined;
  personIsTargetOfDescendanceRelation: Rico.DescendanceRelation<D> | undefined;
  personIsTargetOfKnowingOfRelation: Rico.KnowingOfRelation<D> | undefined;
  personIsTargetOfMembershipRelation: Rico.MembershipRelation<D> | undefined;
  personIsTargetOfTeachingRelation: Rico.TeachingRelation<D> | undefined;
}

export function PersonMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Person & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class PersonClass extends AgentMixin(Resource) {
    @rdfine.property.resource({ implicitTypes: [rico.IntellectualPropertyRightsRelation] })
    agentIsSourceOfIntellectualPropertyRightsRelation: Rico.IntellectualPropertyRightsRelation | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.OwnershipRelation] })
    agentIsSourceOfOwnershipRelation: Rico.OwnershipRelation | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.AuthorshipRelation] })
    agentIsTargetOfAuthorshipRelation: Rico.AuthorshipRelation | undefined;
    @rdfine.property()
    birthDate: RDF.Literal | undefined;
    @rdfine.property()
    deathDate: RDF.Literal | undefined;
    @rdfine.property.resource({ as: [PersonMixin] })
    hasAncestor: Rico.Person | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Date] })
    hasBirthDate: Rico.Date | undefined;
    @rdfine.property.resource({ as: [PersonMixin] })
    hasChild: Rico.Person | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Date] })
    hasDeathDate: Rico.Date | undefined;
    @rdfine.property.resource({ as: [PersonMixin] })
    hasDescendant: Rico.Person | undefined;
    @rdfine.property.resource({ as: [PersonMixin] })
    hasFamilyAssociationWith: Rico.Person | undefined;
    @rdfine.property.resource({ as: [PersonMixin] })
    hasOrHadCorrespondent: Rico.Person | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.DemographicGroup] })
    hasOrHadDemographicGroup: Rico.DemographicGroup | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.OccupationType] })
    hasOrHadOccupationOfType: Rico.OccupationType | undefined;
    @rdfine.property.resource({ as: [PersonMixin] })
    hasOrHadSpouse: Rico.Person | undefined;
    @rdfine.property.resource({ as: [PersonMixin] })
    hasOrHadStudent: Rico.Person | undefined;
    @rdfine.property.resource({ as: [PersonMixin] })
    hasOrHadTeacher: Rico.Person | undefined;
    @rdfine.property.resource({ as: [PersonMixin] })
    hasSibling: Rico.Person | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Record] })
    isAuthorOf: Rico.Record | undefined;
    @rdfine.property.resource({ as: [PersonMixin] })
    isChildOf: Rico.Person | undefined;
    @rdfine.property.resource()
    isOrWasHolderOfIntellectualPropertyRightsOf: Rico.Instantiation | Rico.RecordResource | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Group] })
    isOrWasLeaderOf: Rico.Group | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Group] })
    isOrWasMemberOf: Rico.Group | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Thing] })
    isOrWasOwnerOf: Rico.Thing | undefined;
    @rdfine.property.resource({ as: [PersonMixin] })
    knownBy: Rico.Person | undefined;
    @rdfine.property.resource({ as: [PersonMixin] })
    knows: Rico.Person | undefined;
    @rdfine.property.resource({ as: [PersonMixin] })
    knowsOf: Rico.Person | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Position] })
    occupiesOrOccupied: Rico.Position | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.CorrespondenceRelation] })
    personHasCorrespondenceRelation: Rico.CorrespondenceRelation | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.FamilyRelation] })
    personHasFamilyRelation: Rico.FamilyRelation | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.KnowingRelation] })
    personHasKnowingRelation: Rico.KnowingRelation | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.SiblingRelation] })
    personHasSiblingRelation: Rico.SiblingRelation | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.SpouseRelation] })
    personHasSpouseRelation: Rico.SpouseRelation | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.ChildRelation] })
    personIsSourceOfChildRelation: Rico.ChildRelation | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.DescendanceRelation] })
    personIsSourceOfDescendanceRelation: Rico.DescendanceRelation | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.KnowingOfRelation] })
    personIsSourceOfKnowingOfRelation: Rico.KnowingOfRelation | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.LeadershipRelation] })
    personIsSourceOfLeadershipRelation: Rico.LeadershipRelation | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.PositionHoldingRelation] })
    personIsSourceOfPositionHoldingRelation: Rico.PositionHoldingRelation | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.TeachingRelation] })
    personIsSourceOfTeachingRelation: Rico.TeachingRelation | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.ChildRelation] })
    personIsTargetOfChildRelation: Rico.ChildRelation | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.DescendanceRelation] })
    personIsTargetOfDescendanceRelation: Rico.DescendanceRelation | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.KnowingOfRelation] })
    personIsTargetOfKnowingOfRelation: Rico.KnowingOfRelation | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.MembershipRelation] })
    personIsTargetOfMembershipRelation: Rico.MembershipRelation | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.TeachingRelation] })
    personIsTargetOfTeachingRelation: Rico.TeachingRelation | undefined;
  }
  return PersonClass as any
}

class PersonImpl extends PersonMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Person>) {
    super(arg, init)
    this.types.add(rico.Person)
  }

  static readonly __mixins: Mixin[] = [PersonMixin, AgentMixin];
}
PersonMixin.appliesTo = rico.Person
PersonMixin.Class = PersonImpl

export const fromPointer = createFactory<Person>([AgentMixin, PersonMixin], { types: [rico.Person] });
