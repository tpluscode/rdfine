import * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as Rico from '../index.js';
import { RelationMixin } from './Relation.js';

export interface WholePartRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Relation<D>, rdfine.RdfResource<D> {
  wholePartRelationHasSource: Rico.Thing<D> | undefined;
  wholePartRelationHasTarget: Rico.Thing<D> | undefined;
}

export function WholePartRelationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<WholePartRelation & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class WholePartRelationClass extends RelationMixin(Resource) {
    @rdfine.property.resource({ implicitTypes: [rico.Thing] })
    wholePartRelationHasSource: Rico.Thing | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Thing] })
    wholePartRelationHasTarget: Rico.Thing | undefined;
  }
  return WholePartRelationClass as any
}
WholePartRelationMixin.appliesTo = rico.WholePartRelation
WholePartRelationMixin.createFactory = (env: RdfineEnvironment) => createFactory<WholePartRelation>([RelationMixin, WholePartRelationMixin], { types: [rico.WholePartRelation] }, env)
