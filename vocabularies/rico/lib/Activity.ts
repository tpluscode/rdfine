import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { EventMixin } from './Event.js';

export interface Activity<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Event<D>, RdfResource<D> {
  activityIsContextOfRelation: Rico.AgentTemporalRelation<D> | Rico.MandateRelation<D> | undefined;
  activityIsSourceOfPerformanceRelation: Rico.PerformanceRelation<D> | undefined;
  activityIsTargetOfActivityDocumentationRelation: Rico.ActivityDocumentationRelation<D> | undefined;
  agentOrActivityIsTargetOfProvenanceRelation: Rico.ProvenanceRelation<D> | undefined;
  documentedBy: Rico.Instantiation<D> | Rico.RecordResource<D> | undefined;
  hasActivityType: Rico.ActivityType<D> | undefined;
  history: RDF.Literal | undefined;
  isOrWasPerformedBy: Rico.Agent<D> | undefined;
}

export function ActivityMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Activity> & RdfResourceCore> & Base {
  @namespace(rico)
  class ActivityClass extends EventMixin(Resource) implements Partial<Activity> {
    @property.resource()
    activityIsContextOfRelation: Rico.AgentTemporalRelation | Rico.MandateRelation | undefined;
    @property.resource({ implicitTypes: [rico.PerformanceRelation] })
    activityIsSourceOfPerformanceRelation: Rico.PerformanceRelation | undefined;
    @property.resource({ implicitTypes: [rico.ActivityDocumentationRelation] })
    activityIsTargetOfActivityDocumentationRelation: Rico.ActivityDocumentationRelation | undefined;
    @property.resource({ implicitTypes: [rico.ProvenanceRelation] })
    agentOrActivityIsTargetOfProvenanceRelation: Rico.ProvenanceRelation | undefined;
    @property.resource()
    documentedBy: Rico.Instantiation | Rico.RecordResource | undefined;
    @property.resource({ implicitTypes: [rico.ActivityType] })
    hasActivityType: Rico.ActivityType | undefined;
    @property()
    history: RDF.Literal | undefined;
    @property.resource({ implicitTypes: [rico.Agent] })
    isOrWasPerformedBy: Rico.Agent | undefined;
  }
  return ActivityClass
}

class ActivityImpl extends ActivityMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Activity>) {
    super(arg, init)
    this.types.add(rico.Activity)
  }

  static readonly __mixins: Mixin[] = [ActivityMixin, EventMixin];
}
ActivityMixin.appliesTo = rico.Activity
ActivityMixin.Class = ActivityImpl

export const fromPointer = createFactory<Activity>([EventMixin, ActivityMixin], { types: [rico.Activity] });
