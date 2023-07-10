import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { ProvenanceRelationMixin } from './ProvenanceRelation.js';

export interface AgentOriginationRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.ProvenanceRelation<D>, rdfine.RdfResource<D> {
  agentOriginationRelationHasSource: Rico.Instantiation<D> | Rico.RecordResource<D> | undefined;
  agentOriginationRelationHasTarget: Rico.Agent<D> | undefined;
}

export function AgentOriginationRelationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<AgentOriginationRelation & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class AgentOriginationRelationClass extends ProvenanceRelationMixin(Resource) {
    @rdfine.property.resource()
    agentOriginationRelationHasSource: Rico.Instantiation | Rico.RecordResource | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Agent] })
    agentOriginationRelationHasTarget: Rico.Agent | undefined;
  }
  return AgentOriginationRelationClass as any
}

class AgentOriginationRelationImpl extends AgentOriginationRelationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AgentOriginationRelation>) {
    super(arg, init)
    this.types.add(rico.AgentOriginationRelation)
  }

  static readonly __mixins: Mixin[] = [AgentOriginationRelationMixin, ProvenanceRelationMixin];
}
AgentOriginationRelationMixin.appliesTo = rico.AgentOriginationRelation
AgentOriginationRelationMixin.Class = AgentOriginationRelationImpl

export const fromPointer = createFactory<AgentOriginationRelation>([ProvenanceRelationMixin, AgentOriginationRelationMixin], { types: [rico.AgentOriginationRelation] });
