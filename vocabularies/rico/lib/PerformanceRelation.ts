import * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as Rico from '../index.js';
import { EventRelationMixin } from './EventRelation.js';

export interface PerformanceRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.EventRelation<D>, rdfine.RdfResource<D> {
  performanceRelationHasSource: Rico.Activity<D> | undefined;
  performanceRelationHasTarget: Rico.Agent<D> | undefined;
}

export function PerformanceRelationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<PerformanceRelation & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class PerformanceRelationClass extends EventRelationMixin(Resource) {
    @rdfine.property.resource({ implicitTypes: [rico.Activity] })
    performanceRelationHasSource: Rico.Activity | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Agent] })
    performanceRelationHasTarget: Rico.Agent | undefined;
  }
  return PerformanceRelationClass as any
}
PerformanceRelationMixin.appliesTo = rico.PerformanceRelation
PerformanceRelationMixin.createFactory = (env: RdfineEnvironment) => createFactory<PerformanceRelation>([EventRelationMixin, PerformanceRelationMixin], { types: [rico.PerformanceRelation] }, env)
