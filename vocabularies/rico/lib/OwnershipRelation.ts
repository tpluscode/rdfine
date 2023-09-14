import * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as Rico from '../index.js';
import { AuthorityRelationMixin } from './AuthorityRelation.js';

export interface OwnershipRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.AuthorityRelation<D>, rdfine.RdfResource<D> {
  ownershipRelationHasSource: Rico.Group<D> | Rico.Person<D> | Rico.Position<D> | undefined;
  ownershipRelationHasTarget: Rico.Thing<D> | undefined;
}

export function OwnershipRelationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<OwnershipRelation & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class OwnershipRelationClass extends AuthorityRelationMixin(Resource) {
    @rdfine.property.resource()
    ownershipRelationHasSource: Rico.Group | Rico.Person | Rico.Position | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Thing] })
    ownershipRelationHasTarget: Rico.Thing | undefined;
  }
  return OwnershipRelationClass as any
}
OwnershipRelationMixin.appliesTo = rico.OwnershipRelation
OwnershipRelationMixin.createFactory = (env: RdfineEnvironment) => createFactory<OwnershipRelation>([AuthorityRelationMixin, OwnershipRelationMixin], { types: [rico.OwnershipRelation] }, env)
