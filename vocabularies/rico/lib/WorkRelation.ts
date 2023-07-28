import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { AgentToAgentRelationMixin } from './AgentToAgentRelation.js';

export interface WorkRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.AgentToAgentRelation<D>, rdfine.RdfResource<D> {
  workRelationConnects: Rico.Agent<D> | undefined;
}

export function WorkRelationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<WorkRelation & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class WorkRelationClass extends AgentToAgentRelationMixin(Resource) {
    @rdfine.property.resource({ implicitTypes: [rico.Agent] })
    workRelationConnects: Rico.Agent | undefined;
  }
  return WorkRelationClass as any
}

class WorkRelationImpl extends WorkRelationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<WorkRelation>) {
    super(arg, init)
    this.types.add(rico.WorkRelation)
  }

  static readonly __mixins: Mixin[] = [WorkRelationMixin, AgentToAgentRelationMixin];
}
WorkRelationMixin.appliesTo = rico.WorkRelation
WorkRelationMixin.Class = WorkRelationImpl

export const fromPointer = createFactory<WorkRelation>([AgentToAgentRelationMixin, WorkRelationMixin], { types: [rico.WorkRelation] });
