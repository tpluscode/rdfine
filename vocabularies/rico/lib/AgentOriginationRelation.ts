import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '..';
import { ProvenanceRelationMixin } from './ProvenanceRelation';

export interface AgentOriginationRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.ProvenanceRelation<D>, RdfResource<D> {
  agentOriginationRelationHasSource: Rico.Instantiation<D> | Rico.RecordResource<D> | undefined;
  agentOriginationRelationHasTarget: Rico.Agent<D> | undefined;
}

export function AgentOriginationRelationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<AgentOriginationRelation> & RdfResourceCore> & Base {
  @namespace(rico)
  class AgentOriginationRelationClass extends ProvenanceRelationMixin(Resource) implements Partial<AgentOriginationRelation> {
    @property.resource()
    agentOriginationRelationHasSource: Rico.Instantiation | Rico.RecordResource | undefined;
    @property.resource({ implicitTypes: [rico.Agent] })
    agentOriginationRelationHasTarget: Rico.Agent | undefined;
  }
  return AgentOriginationRelationClass
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
