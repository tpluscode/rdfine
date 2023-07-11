import * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as Rico from '../index.js';
import { SequentialRelationMixin } from './SequentialRelation.js';

export interface TemporalRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.SequentialRelation<D>, rdfine.RdfResource<D> {
  temporalRelationHasSource: Rico.Thing<D> | undefined;
  temporalRelationHasTarget: Rico.Thing<D> | undefined;
}

export function TemporalRelationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<TemporalRelation & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class TemporalRelationClass extends SequentialRelationMixin(Resource) {
    @rdfine.property.resource({ implicitTypes: [rico.Thing] })
    temporalRelationHasSource: Rico.Thing | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Thing] })
    temporalRelationHasTarget: Rico.Thing | undefined;
  }
  return TemporalRelationClass as any
}
TemporalRelationMixin.appliesTo = rico.TemporalRelation

export const factory = (env: RdfineEnvironment) => createFactory<TemporalRelation>([SequentialRelationMixin, TemporalRelationMixin], { types: [rico.TemporalRelation] }, env);
