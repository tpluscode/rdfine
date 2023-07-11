import * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as Rico from '../index.js';

export interface Thing<D extends RDF.DatasetCore = RDF.DatasetCore> extends rdfine.RdfResource<D> {
  beginningDate: RDF.Literal | undefined;
  creationDate: RDF.Literal | undefined;
  date: RDF.Literal | undefined;
  deletionDate: RDF.Literal | undefined;
  descriptiveNote: RDF.Literal | undefined;
  endDate: RDF.Literal | undefined;
  followsInTime: Rico.Thing<D> | undefined;
  followsOrFollowed: Rico.Thing<D> | undefined;
  hasBeginningDate: Rico.Date<D> | undefined;
  hasEndDate: Rico.Date<D> | undefined;
  hasModificationDate: Rico.Date<D> | undefined;
  hasOrHadAppellation: Rico.Appellation<D> | undefined;
  hasOrHadCategory: Rico.Type<D> | undefined;
  hasOrHadIdentifier: Rico.Identifier<D> | undefined;
  hasOrHadLocation: Rico.Place<D> | undefined;
  hasOrHadName: Rico.Name<D> | undefined;
  hasOrHadOwner: Rico.Group<D> | Rico.Person<D> | Rico.Position<D> | undefined;
  hasOrHadPart: Rico.Thing<D> | undefined;
  height: RDF.Literal | undefined;
  identifier: RDF.Literal | undefined;
  isAssociatedWithDate: Rico.Date<D> | undefined;
  isAssociatedWithEvent: Rico.Event<D> | undefined;
  isAssociatedWithPlace: Rico.Place<D> | undefined;
  isAssociatedWithRule: Rico.Rule<D> | undefined;
  isEquivalentTo: Rico.Thing<D> | undefined;
  isOrWasAffectedBy: Rico.Event<D> | undefined;
  isOrWasDescribedBy: Rico.RecordResource<D> | undefined;
  isOrWasMainSubjectOf: Rico.RecordResource<D> | undefined;
  isOrWasParticipantIn: Rico.Event<D> | undefined;
  isOrWasPartOf: Rico.Thing<D> | undefined;
  isOrWasRegulatedBy: Rico.Rule<D> | undefined;
  isOrWasSubjectOf: Rico.RecordResource<D> | undefined;
  isOrWasUnderAuthorityOf: Rico.Agent<D> | undefined;
  isRelatedTo: Rico.Thing<D> | undefined;
  lastModificationDate: RDF.Literal | undefined;
  measure: RDF.Literal | undefined;
  modificationDate: RDF.Literal | undefined;
  name: RDF.Literal | undefined;
  precedesInTime: Rico.Thing<D> | undefined;
  precedesOrPreceded: Rico.Thing<D> | undefined;
  referenceSystem: RDF.Literal | undefined;
  resultsOrResultedFrom: Rico.Event<D> | undefined;
  ruleFollowed: RDF.Literal | undefined;
  thingIsConnectedToRelation: Rico.Relation<D> | undefined;
  thingIsContextOfRelation: Rico.Relation<D> | undefined;
  thingIsSourceOfRelation: Rico.Relation<D> | undefined;
  thingIsSourceOfSequentialRelation: Rico.SequentialRelation<D> | undefined;
  thingIsSourceOfTemporalRelation: Rico.TemporalRelation<D> | undefined;
  thingIsSourceOfWholePartRelation: Rico.WholePartRelation<D> | undefined;
  thingIsTargetOfAppellationRelation: Rico.AppellationRelation<D> | undefined;
  thingIsTargetOfAuthorityRelation: Rico.AuthorityRelation<D> | undefined;
  thingIsTargetOfEventRelation: Rico.EventRelation<D> | undefined;
  thingIsTargetOfOwnershipRelation: Rico.OwnershipRelation<D> | undefined;
  thingIsTargetOfPlaceRelation: Rico.PlaceRelation<D> | undefined;
  thingIsTargetOfRelation: Rico.Relation<D> | undefined;
  thingIsTargetOfRuleRelation: Rico.RuleRelation<D> | undefined;
  thingIsTargetOfSequentialRelation: Rico.SequentialRelation<D> | undefined;
  thingIsTargetOfTemporalRelation: Rico.TemporalRelation<D> | undefined;
  thingIsTargetOfTypeRelation: Rico.TypeRelation<D> | undefined;
  thingIsTargetOfWholePartRelation: Rico.WholePartRelation<D> | undefined;
  type: RDF.Literal | undefined;
  wasLastUpdatedAtDate: Rico.Date<D> | undefined;
  width: RDF.Literal | undefined;
}

export function ThingMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Thing & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class ThingClass extends Resource {
    @rdfine.property()
    beginningDate: RDF.Literal | undefined;
    @rdfine.property()
    creationDate: RDF.Literal | undefined;
    @rdfine.property()
    date: RDF.Literal | undefined;
    @rdfine.property()
    deletionDate: RDF.Literal | undefined;
    @rdfine.property()
    descriptiveNote: RDF.Literal | undefined;
    @rdfine.property()
    endDate: RDF.Literal | undefined;
    @rdfine.property.resource({ as: [ThingMixin] })
    followsInTime: Rico.Thing | undefined;
    @rdfine.property.resource({ as: [ThingMixin] })
    followsOrFollowed: Rico.Thing | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Date] })
    hasBeginningDate: Rico.Date | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Date] })
    hasEndDate: Rico.Date | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Date] })
    hasModificationDate: Rico.Date | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Appellation] })
    hasOrHadAppellation: Rico.Appellation | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Type] })
    hasOrHadCategory: Rico.Type | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Identifier] })
    hasOrHadIdentifier: Rico.Identifier | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Place] })
    hasOrHadLocation: Rico.Place | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Name] })
    hasOrHadName: Rico.Name | undefined;
    @rdfine.property.resource()
    hasOrHadOwner: Rico.Group | Rico.Person | Rico.Position | undefined;
    @rdfine.property.resource({ as: [ThingMixin] })
    hasOrHadPart: Rico.Thing | undefined;
    @rdfine.property()
    height: RDF.Literal | undefined;
    @rdfine.property()
    identifier: RDF.Literal | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Date] })
    isAssociatedWithDate: Rico.Date | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Event] })
    isAssociatedWithEvent: Rico.Event | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Place] })
    isAssociatedWithPlace: Rico.Place | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Rule] })
    isAssociatedWithRule: Rico.Rule | undefined;
    @rdfine.property.resource({ as: [ThingMixin] })
    isEquivalentTo: Rico.Thing | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Event] })
    isOrWasAffectedBy: Rico.Event | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.RecordResource] })
    isOrWasDescribedBy: Rico.RecordResource | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.RecordResource] })
    isOrWasMainSubjectOf: Rico.RecordResource | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Event] })
    isOrWasParticipantIn: Rico.Event | undefined;
    @rdfine.property.resource({ as: [ThingMixin] })
    isOrWasPartOf: Rico.Thing | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Rule] })
    isOrWasRegulatedBy: Rico.Rule | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.RecordResource] })
    isOrWasSubjectOf: Rico.RecordResource | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Agent] })
    isOrWasUnderAuthorityOf: Rico.Agent | undefined;
    @rdfine.property.resource({ as: [ThingMixin] })
    isRelatedTo: Rico.Thing | undefined;
    @rdfine.property()
    lastModificationDate: RDF.Literal | undefined;
    @rdfine.property()
    measure: RDF.Literal | undefined;
    @rdfine.property()
    modificationDate: RDF.Literal | undefined;
    @rdfine.property()
    name: RDF.Literal | undefined;
    @rdfine.property.resource({ as: [ThingMixin] })
    precedesInTime: Rico.Thing | undefined;
    @rdfine.property.resource({ as: [ThingMixin] })
    precedesOrPreceded: Rico.Thing | undefined;
    @rdfine.property()
    referenceSystem: RDF.Literal | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Event] })
    resultsOrResultedFrom: Rico.Event | undefined;
    @rdfine.property()
    ruleFollowed: RDF.Literal | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Relation] })
    thingIsConnectedToRelation: Rico.Relation | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Relation] })
    thingIsContextOfRelation: Rico.Relation | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Relation] })
    thingIsSourceOfRelation: Rico.Relation | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.SequentialRelation] })
    thingIsSourceOfSequentialRelation: Rico.SequentialRelation | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.TemporalRelation] })
    thingIsSourceOfTemporalRelation: Rico.TemporalRelation | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.WholePartRelation] })
    thingIsSourceOfWholePartRelation: Rico.WholePartRelation | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.AppellationRelation] })
    thingIsTargetOfAppellationRelation: Rico.AppellationRelation | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.AuthorityRelation] })
    thingIsTargetOfAuthorityRelation: Rico.AuthorityRelation | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.EventRelation] })
    thingIsTargetOfEventRelation: Rico.EventRelation | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.OwnershipRelation] })
    thingIsTargetOfOwnershipRelation: Rico.OwnershipRelation | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.PlaceRelation] })
    thingIsTargetOfPlaceRelation: Rico.PlaceRelation | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Relation] })
    thingIsTargetOfRelation: Rico.Relation | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.RuleRelation] })
    thingIsTargetOfRuleRelation: Rico.RuleRelation | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.SequentialRelation] })
    thingIsTargetOfSequentialRelation: Rico.SequentialRelation | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.TemporalRelation] })
    thingIsTargetOfTemporalRelation: Rico.TemporalRelation | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.TypeRelation] })
    thingIsTargetOfTypeRelation: Rico.TypeRelation | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.WholePartRelation] })
    thingIsTargetOfWholePartRelation: Rico.WholePartRelation | undefined;
    @rdfine.property()
    type: RDF.Literal | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Date] })
    wasLastUpdatedAtDate: Rico.Date | undefined;
    @rdfine.property()
    width: RDF.Literal | undefined;
  }
  return ThingClass as any
}
ThingMixin.appliesTo = rico.Thing

export const factory = (env: RdfineEnvironment) => createFactory<Thing>([ThingMixin], { types: [rico.Thing] }, env);
