import * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as Rico from '../index.js';
import { AgentOriginationRelationMixin } from './AgentOriginationRelation.js';

export interface CreationRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.AgentOriginationRelation<D>, rdfine.RdfResource<D> {
  creationRelationHasSource: Rico.Instantiation<D> | Rico.RecordResource<D> | undefined;
  creationRelationHasTarget: Rico.Agent<D> | undefined;
  creationWithRole: Rico.RoleType<D> | undefined;
}

export function CreationRelationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<CreationRelation & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class CreationRelationClass extends AgentOriginationRelationMixin(Resource) {
    @rdfine.property.resource()
    creationRelationHasSource: Rico.Instantiation | Rico.RecordResource | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Agent] })
    creationRelationHasTarget: Rico.Agent | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.RoleType] })
    creationWithRole: Rico.RoleType | undefined;
  }
  return CreationRelationClass as any
}
CreationRelationMixin.appliesTo = rico.CreationRelation

export const factory = (env: RdfineEnvironment) => createFactory<CreationRelation>([AgentOriginationRelationMixin, CreationRelationMixin], { types: [rico.CreationRelation] }, env);
