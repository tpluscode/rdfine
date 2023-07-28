import * as rdfine from '@tpluscode/rdfine';
import { createFactory, Factory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as Rico from '../index.js';
import { CreationRelationMixin } from './CreationRelation.js';

export interface AuthorshipRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.CreationRelation<D>, rdfine.RdfResource<D> {
  authorshipRelationHasSource: Rico.Record<D> | undefined;
  authorshipRelationHasTarget: Rico.Group<D> | Rico.Person<D> | Rico.Position<D> | undefined;
}

declare global {
  interface RicoVocabulary {
    AuthorshipRelation: Factory<Rico.AuthorshipRelation>;
  }
}

export function AuthorshipRelationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<AuthorshipRelation & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class AuthorshipRelationClass extends CreationRelationMixin(Resource) {
    @rdfine.property.resource({ implicitTypes: [rico.Record] })
    authorshipRelationHasSource: Rico.Record | undefined;
    @rdfine.property.resource()
    authorshipRelationHasTarget: Rico.Group | Rico.Person | Rico.Position | undefined;
  }
  return AuthorshipRelationClass as any
}
AuthorshipRelationMixin.appliesTo = rico.AuthorshipRelation
AuthorshipRelationMixin.createFactory = (env: RdfineEnvironment) => createFactory<AuthorshipRelation>([CreationRelationMixin, AuthorshipRelationMixin], { types: [rico.AuthorshipRelation] }, env)
