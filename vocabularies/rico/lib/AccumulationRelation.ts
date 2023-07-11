import * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as Rico from '../index.js';
import { AgentOriginationRelationMixin } from './AgentOriginationRelation.js';

export interface AccumulationRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.AgentOriginationRelation<D>, rdfine.RdfResource<D> {
  accumulationRelationHasSource: Rico.Instantiation<D> | Rico.RecordResource<D> | undefined;
  accumulationRelationHasTarget: Rico.Agent<D> | undefined;
}

export function AccumulationRelationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<AccumulationRelation & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class AccumulationRelationClass extends AgentOriginationRelationMixin(Resource) {
    @rdfine.property.resource()
    accumulationRelationHasSource: Rico.Instantiation | Rico.RecordResource | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Agent] })
    accumulationRelationHasTarget: Rico.Agent | undefined;
  }
  return AccumulationRelationClass as any
}
AccumulationRelationMixin.appliesTo = rico.AccumulationRelation

export const factory = (env: RdfineEnvironment) => createFactory<AccumulationRelation>([AgentOriginationRelationMixin, AccumulationRelationMixin], { types: [rico.AccumulationRelation] }, env);
