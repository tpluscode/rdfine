import * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as Rico from '../index.js';
import { FamilyRelationMixin } from './FamilyRelation.js';

export interface SiblingRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.FamilyRelation<D>, rdfine.RdfResource<D> {
  siblingRelationConnects: Rico.Person<D> | undefined;
}

export function SiblingRelationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<SiblingRelation & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class SiblingRelationClass extends FamilyRelationMixin(Resource) {
    @rdfine.property.resource({ implicitTypes: [rico.Person] })
    siblingRelationConnects: Rico.Person | undefined;
  }
  return SiblingRelationClass as any
}
SiblingRelationMixin.appliesTo = rico.SiblingRelation

export const factory = (env: RdfineEnvironment) => createFactory<SiblingRelation>([FamilyRelationMixin, SiblingRelationMixin], { types: [rico.SiblingRelation] }, env);
