import * as rdfine from '@tpluscode/rdfine';
import { createFactory, Factory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as Rico from '../index.js';
import { RelationMixin } from './Relation.js';

export interface TypeRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Relation<D>, rdfine.RdfResource<D> {
  typeRelationHasSource: Rico.Type<D> | undefined;
  typeRelationHasTarget: Rico.Thing<D> | undefined;
}

declare global {
  interface RicoVocabulary {
    TypeRelation: Factory<Rico.TypeRelation>;
  }
}

export function TypeRelationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<TypeRelation & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class TypeRelationClass extends RelationMixin(Resource) {
    @rdfine.property.resource({ implicitTypes: [rico.Type] })
    typeRelationHasSource: Rico.Type | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Thing] })
    typeRelationHasTarget: Rico.Thing | undefined;
  }
  return TypeRelationClass as any
}
TypeRelationMixin.appliesTo = rico.TypeRelation
TypeRelationMixin.createFactory = (env: RdfineEnvironment) => createFactory<TypeRelation>([RelationMixin, TypeRelationMixin], { types: [rico.TypeRelation] }, env)
