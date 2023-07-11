import * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as Rico from '../index.js';
import { InstantiationToInstantiationRelationMixin } from './InstantiationToInstantiationRelation.js';

export interface FunctionalEquivalenceRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.InstantiationToInstantiationRelation<D>, rdfine.RdfResource<D> {
  functionalEquivalenceRelationConnects: Rico.Instantiation<D> | undefined;
}

export function FunctionalEquivalenceRelationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<FunctionalEquivalenceRelation & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class FunctionalEquivalenceRelationClass extends InstantiationToInstantiationRelationMixin(Resource) {
    @rdfine.property.resource({ implicitTypes: [rico.Instantiation] })
    functionalEquivalenceRelationConnects: Rico.Instantiation | undefined;
  }
  return FunctionalEquivalenceRelationClass as any
}
FunctionalEquivalenceRelationMixin.appliesTo = rico.FunctionalEquivalenceRelation

export const factory = (env: RdfineEnvironment) => createFactory<FunctionalEquivalenceRelation>([InstantiationToInstantiationRelationMixin, FunctionalEquivalenceRelationMixin], { types: [rico.FunctionalEquivalenceRelation] }, env);
