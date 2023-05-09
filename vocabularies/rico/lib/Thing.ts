import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';

export interface Thing<D extends RDF.DatasetCore = RDF.DatasetCore> extends RdfResource<D> {
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

export function ThingMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Thing> & RdfResourceCore> & Base {
  @namespace(rico)
  class ThingClass extends Resource implements Partial<Thing> {
    @property()
    beginningDate: RDF.Literal | undefined;
    @property()
    creationDate: RDF.Literal | undefined;
    @property()
    date: RDF.Literal | undefined;
    @property()
    deletionDate: RDF.Literal | undefined;
    @property()
    descriptiveNote: RDF.Literal | undefined;
    @property()
    endDate: RDF.Literal | undefined;
    @property.resource({ as: [ThingMixin] })
    followsInTime: Rico.Thing | undefined;
    @property.resource({ as: [ThingMixin] })
    followsOrFollowed: Rico.Thing | undefined;
    @property.resource({ implicitTypes: [rico.Date] })
    hasBeginningDate: Rico.Date | undefined;
    @property.resource({ implicitTypes: [rico.Date] })
    hasEndDate: Rico.Date | undefined;
    @property.resource({ implicitTypes: [rico.Date] })
    hasModificationDate: Rico.Date | undefined;
    @property.resource({ implicitTypes: [rico.Appellation] })
    hasOrHadAppellation: Rico.Appellation | undefined;
    @property.resource({ implicitTypes: [rico.Type] })
    hasOrHadCategory: Rico.Type | undefined;
    @property.resource({ implicitTypes: [rico.Identifier] })
    hasOrHadIdentifier: Rico.Identifier | undefined;
    @property.resource({ implicitTypes: [rico.Place] })
    hasOrHadLocation: Rico.Place | undefined;
    @property.resource({ implicitTypes: [rico.Name] })
    hasOrHadName: Rico.Name | undefined;
    @property.resource()
    hasOrHadOwner: Rico.Group | Rico.Person | Rico.Position | undefined;
    @property.resource({ as: [ThingMixin] })
    hasOrHadPart: Rico.Thing | undefined;
    @property()
    height: RDF.Literal | undefined;
    @property()
    identifier: RDF.Literal | undefined;
    @property.resource({ implicitTypes: [rico.Date] })
    isAssociatedWithDate: Rico.Date | undefined;
    @property.resource({ implicitTypes: [rico.Event] })
    isAssociatedWithEvent: Rico.Event | undefined;
    @property.resource({ implicitTypes: [rico.Place] })
    isAssociatedWithPlace: Rico.Place | undefined;
    @property.resource({ implicitTypes: [rico.Rule] })
    isAssociatedWithRule: Rico.Rule | undefined;
    @property.resource({ as: [ThingMixin] })
    isEquivalentTo: Rico.Thing | undefined;
    @property.resource({ implicitTypes: [rico.Event] })
    isOrWasAffectedBy: Rico.Event | undefined;
    @property.resource({ implicitTypes: [rico.RecordResource] })
    isOrWasDescribedBy: Rico.RecordResource | undefined;
    @property.resource({ implicitTypes: [rico.RecordResource] })
    isOrWasMainSubjectOf: Rico.RecordResource | undefined;
    @property.resource({ implicitTypes: [rico.Event] })
    isOrWasParticipantIn: Rico.Event | undefined;
    @property.resource({ as: [ThingMixin] })
    isOrWasPartOf: Rico.Thing | undefined;
    @property.resource({ implicitTypes: [rico.Rule] })
    isOrWasRegulatedBy: Rico.Rule | undefined;
    @property.resource({ implicitTypes: [rico.RecordResource] })
    isOrWasSubjectOf: Rico.RecordResource | undefined;
    @property.resource({ implicitTypes: [rico.Agent] })
    isOrWasUnderAuthorityOf: Rico.Agent | undefined;
    @property.resource({ as: [ThingMixin] })
    isRelatedTo: Rico.Thing | undefined;
    @property()
    lastModificationDate: RDF.Literal | undefined;
    @property()
    measure: RDF.Literal | undefined;
    @property()
    modificationDate: RDF.Literal | undefined;
    @property()
    name: RDF.Literal | undefined;
    @property.resource({ as: [ThingMixin] })
    precedesInTime: Rico.Thing | undefined;
    @property.resource({ as: [ThingMixin] })
    precedesOrPreceded: Rico.Thing | undefined;
    @property()
    referenceSystem: RDF.Literal | undefined;
    @property.resource({ implicitTypes: [rico.Event] })
    resultsOrResultedFrom: Rico.Event | undefined;
    @property()
    ruleFollowed: RDF.Literal | undefined;
    @property.resource({ implicitTypes: [rico.Relation] })
    thingIsConnectedToRelation: Rico.Relation | undefined;
    @property.resource({ implicitTypes: [rico.Relation] })
    thingIsContextOfRelation: Rico.Relation | undefined;
    @property.resource({ implicitTypes: [rico.Relation] })
    thingIsSourceOfRelation: Rico.Relation | undefined;
    @property.resource({ implicitTypes: [rico.SequentialRelation] })
    thingIsSourceOfSequentialRelation: Rico.SequentialRelation | undefined;
    @property.resource({ implicitTypes: [rico.TemporalRelation] })
    thingIsSourceOfTemporalRelation: Rico.TemporalRelation | undefined;
    @property.resource({ implicitTypes: [rico.WholePartRelation] })
    thingIsSourceOfWholePartRelation: Rico.WholePartRelation | undefined;
    @property.resource({ implicitTypes: [rico.AppellationRelation] })
    thingIsTargetOfAppellationRelation: Rico.AppellationRelation | undefined;
    @property.resource({ implicitTypes: [rico.AuthorityRelation] })
    thingIsTargetOfAuthorityRelation: Rico.AuthorityRelation | undefined;
    @property.resource({ implicitTypes: [rico.EventRelation] })
    thingIsTargetOfEventRelation: Rico.EventRelation | undefined;
    @property.resource({ implicitTypes: [rico.OwnershipRelation] })
    thingIsTargetOfOwnershipRelation: Rico.OwnershipRelation | undefined;
    @property.resource({ implicitTypes: [rico.PlaceRelation] })
    thingIsTargetOfPlaceRelation: Rico.PlaceRelation | undefined;
    @property.resource({ implicitTypes: [rico.Relation] })
    thingIsTargetOfRelation: Rico.Relation | undefined;
    @property.resource({ implicitTypes: [rico.RuleRelation] })
    thingIsTargetOfRuleRelation: Rico.RuleRelation | undefined;
    @property.resource({ implicitTypes: [rico.SequentialRelation] })
    thingIsTargetOfSequentialRelation: Rico.SequentialRelation | undefined;
    @property.resource({ implicitTypes: [rico.TemporalRelation] })
    thingIsTargetOfTemporalRelation: Rico.TemporalRelation | undefined;
    @property.resource({ implicitTypes: [rico.TypeRelation] })
    thingIsTargetOfTypeRelation: Rico.TypeRelation | undefined;
    @property.resource({ implicitTypes: [rico.WholePartRelation] })
    thingIsTargetOfWholePartRelation: Rico.WholePartRelation | undefined;
    @property()
    type: RDF.Literal | undefined;
    @property.resource({ implicitTypes: [rico.Date] })
    wasLastUpdatedAtDate: Rico.Date | undefined;
    @property()
    width: RDF.Literal | undefined;
  }
  return ThingClass
}

class ThingImpl extends ThingMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Thing>) {
    super(arg, init)
    this.types.add(rico.Thing)
  }

  static readonly __mixins: Mixin[] = [ThingMixin];
}
ThingMixin.appliesTo = rico.Thing
ThingMixin.Class = ThingImpl

export const fromPointer = createFactory<Thing>([ThingMixin], { types: [rico.Thing] });
