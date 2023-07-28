import * as rdfine from '@tpluscode/rdfine';
import { createFactory, Factory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as Rico from '../index.js';
import { ProvenanceRelationMixin } from './ProvenanceRelation.js';

export interface AgentOriginationRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.ProvenanceRelation<D>, rdfine.RdfResource<D> {
  agentOriginationRelationHasSource: Rico.Instantiation<D> | Rico.RecordResource<D> | undefined;
  agentOriginationRelationHasTarget: Rico.Agent<D> | undefined;
}

declare global {
  interface RicoVocabulary {
    AgentOriginationRelation: Factory<Rico.AgentOriginationRelation>;
  }
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
AgentOriginationRelationMixin.appliesTo = rico.AgentOriginationRelation
AgentOriginationRelationMixin.createFactory = (env: RdfineEnvironment) => createFactory<AgentOriginationRelation>([ProvenanceRelationMixin, AgentOriginationRelationMixin], { types: [rico.AgentOriginationRelation] }, env)
