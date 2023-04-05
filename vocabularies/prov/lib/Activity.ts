import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { prov } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Prov from '../index.js';

export interface Activity<D extends RDF.DatasetCore = RDF.DatasetCore> extends RdfResource<D> {
  atLocation: Prov.Location<D> | undefined;
  endedAtTime: Date | undefined;
  generated: Prov.Entity<D> | undefined;
  invalidated: Prov.Entity<D> | undefined;
  qualifiedAssociation: Prov.Association<D> | undefined;
  qualifiedCommunication: Prov.Communication<D> | undefined;
  qualifiedEnd: Prov.End<D> | undefined;
  qualifiedInfluence: Prov.Influence<D> | undefined;
  qualifiedStart: Prov.Start<D> | undefined;
  qualifiedUsage: Prov.Usage<D> | undefined;
  startedAtTime: Date | undefined;
  used: Prov.Entity<D> | undefined;
  wasAssociatedWith: Prov.Agent<D> | undefined;
  wasEndedBy: Prov.Entity<D> | undefined;
  wasInfluencedBy: Prov.Activity<D> | Prov.Agent<D> | Prov.Entity<D> | undefined;
  wasInformedBy: Prov.Activity<D> | undefined;
  wasStartedBy: Prov.Entity<D> | undefined;
}

export function ActivityMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Activity> & RdfResourceCore> & Base {
  @namespace(prov)
  class ActivityClass extends Resource implements Partial<Activity> {
    @property.resource({ implicitTypes: [prov.Location] })
    atLocation: Prov.Location | undefined;
    @property.literal({ type: Date })
    endedAtTime: Date | undefined;
    @property.resource({ implicitTypes: [prov.Entity] })
    generated: Prov.Entity | undefined;
    @property.resource({ implicitTypes: [prov.Entity] })
    invalidated: Prov.Entity | undefined;
    @property.resource({ implicitTypes: [prov.Association] })
    qualifiedAssociation: Prov.Association | undefined;
    @property.resource({ implicitTypes: [prov.Communication] })
    qualifiedCommunication: Prov.Communication | undefined;
    @property.resource({ implicitTypes: [prov.End] })
    qualifiedEnd: Prov.End | undefined;
    @property.resource({ implicitTypes: [prov.Influence] })
    qualifiedInfluence: Prov.Influence | undefined;
    @property.resource({ implicitTypes: [prov.Start] })
    qualifiedStart: Prov.Start | undefined;
    @property.resource({ implicitTypes: [prov.Usage] })
    qualifiedUsage: Prov.Usage | undefined;
    @property.literal({ type: Date })
    startedAtTime: Date | undefined;
    @property.resource({ implicitTypes: [prov.Entity] })
    used: Prov.Entity | undefined;
    @property.resource({ implicitTypes: [prov.Agent] })
    wasAssociatedWith: Prov.Agent | undefined;
    @property.resource({ implicitTypes: [prov.Entity] })
    wasEndedBy: Prov.Entity | undefined;
    @property.resource()
    wasInfluencedBy: Prov.Activity | Prov.Agent | Prov.Entity | undefined;
    @property.resource({ as: [ActivityMixin] })
    wasInformedBy: Prov.Activity | undefined;
    @property.resource({ implicitTypes: [prov.Entity] })
    wasStartedBy: Prov.Entity | undefined;
  }
  return ActivityClass
}

class ActivityImpl extends ActivityMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Activity>) {
    super(arg, init)
    this.types.add(prov.Activity)
  }

  static readonly __mixins: Mixin[] = [ActivityMixin];
}
ActivityMixin.appliesTo = prov.Activity
ActivityMixin.Class = ActivityImpl

export const fromPointer = createFactory<Activity>([ActivityMixin], { types: [prov.Activity] });
