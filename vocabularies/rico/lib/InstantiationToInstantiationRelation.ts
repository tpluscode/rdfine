import * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as Rico from '../index.js';
import { RelationMixin } from './Relation.js';

export interface InstantiationToInstantiationRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Relation<D>, rdfine.RdfResource<D> {
  instantiationToInstantiationRelationConnects: Rico.Instantiation<D> | undefined;
}

export function InstantiationToInstantiationRelationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<InstantiationToInstantiationRelation & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class InstantiationToInstantiationRelationClass extends RelationMixin(Resource) {
    @rdfine.property.resource({ implicitTypes: [rico.Instantiation] })
    instantiationToInstantiationRelationConnects: Rico.Instantiation | undefined;
  }
  return InstantiationToInstantiationRelationClass as any
}
InstantiationToInstantiationRelationMixin.appliesTo = rico.InstantiationToInstantiationRelation

export const factory = (env: RdfineEnvironment) => createFactory<InstantiationToInstantiationRelation>([RelationMixin, InstantiationToInstantiationRelationMixin], { types: [rico.InstantiationToInstantiationRelation] }, env);
