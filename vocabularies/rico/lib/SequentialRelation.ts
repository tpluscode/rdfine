import * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as Rico from '../index.js';
import { RelationMixin } from './Relation.js';

export interface SequentialRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Relation<D>, rdfine.RdfResource<D> {
  sequentialRelationHasSource: Rico.Thing<D> | undefined;
  sequentialRelationHasTarget: Rico.Thing<D> | undefined;
}

export function SequentialRelationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<SequentialRelation & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class SequentialRelationClass extends RelationMixin(Resource) {
    @rdfine.property.resource({ implicitTypes: [rico.Thing] })
    sequentialRelationHasSource: Rico.Thing | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Thing] })
    sequentialRelationHasTarget: Rico.Thing | undefined;
  }
  return SequentialRelationClass as any
}
SequentialRelationMixin.appliesTo = rico.SequentialRelation
SequentialRelationMixin.createFactory = (env: RdfineEnvironment) => createFactory<SequentialRelation>([RelationMixin, SequentialRelationMixin], { types: [rico.SequentialRelation] }, env)
