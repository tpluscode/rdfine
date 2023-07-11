import * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as Rico from '../index.js';
import { AgentToAgentRelationMixin } from './AgentToAgentRelation.js';

export interface PositionToGroupRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.AgentToAgentRelation<D>, rdfine.RdfResource<D> {
  positionToGroupRelationHasSource: Rico.Position<D> | undefined;
  positionToGroupRelationHasTarget: Rico.Group<D> | undefined;
}

export function PositionToGroupRelationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<PositionToGroupRelation & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class PositionToGroupRelationClass extends AgentToAgentRelationMixin(Resource) {
    @rdfine.property.resource({ implicitTypes: [rico.Position] })
    positionToGroupRelationHasSource: Rico.Position | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Group] })
    positionToGroupRelationHasTarget: Rico.Group | undefined;
  }
  return PositionToGroupRelationClass as any
}
PositionToGroupRelationMixin.appliesTo = rico.PositionToGroupRelation

export const factory = (env: RdfineEnvironment) => createFactory<PositionToGroupRelation>([AgentToAgentRelationMixin, PositionToGroupRelationMixin], { types: [rico.PositionToGroupRelation] }, env);
