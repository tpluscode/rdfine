import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '..';
import { AgentToAgentRelationMixin } from './AgentToAgentRelation';

export interface WorkRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.AgentToAgentRelation<D>, RdfResource<D> {
  workRelationConnects: Rico.Agent<D> | undefined;
}

export function WorkRelationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<WorkRelation> & RdfResourceCore> & Base {
  @namespace(rico)
  class WorkRelationClass extends AgentToAgentRelationMixin(Resource) implements Partial<WorkRelation> {
    @property.resource({ implicitTypes: [rico.Agent] })
    workRelationConnects: Rico.Agent | undefined;
  }
  return WorkRelationClass
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
