import * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as Rico from '../index.js';
import { AuthorityRelationMixin } from './AuthorityRelation.js';

export interface IntellectualPropertyRightsRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.AuthorityRelation<D>, rdfine.RdfResource<D> {
  intellectualPropertyRightsRelationHasSource: Rico.Group<D> | Rico.Person<D> | Rico.Position<D> | undefined;
  intellectualPropertyRightsRelationHasTarget: Rico.Instantiation<D> | Rico.RecordResource<D> | undefined;
}

export function IntellectualPropertyRightsRelationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<IntellectualPropertyRightsRelation & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class IntellectualPropertyRightsRelationClass extends AuthorityRelationMixin(Resource) {
    @rdfine.property.resource()
    intellectualPropertyRightsRelationHasSource: Rico.Group | Rico.Person | Rico.Position | undefined;
    @rdfine.property.resource()
    intellectualPropertyRightsRelationHasTarget: Rico.Instantiation | Rico.RecordResource | undefined;
  }
  return IntellectualPropertyRightsRelationClass as any
}
IntellectualPropertyRightsRelationMixin.appliesTo = rico.IntellectualPropertyRightsRelation
IntellectualPropertyRightsRelationMixin.createFactory = (env: RdfineEnvironment) => createFactory<IntellectualPropertyRightsRelation>([AuthorityRelationMixin, IntellectualPropertyRightsRelationMixin], { types: [rico.IntellectualPropertyRightsRelation] }, env)
