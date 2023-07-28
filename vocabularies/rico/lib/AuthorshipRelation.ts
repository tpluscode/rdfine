import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { CreationRelationMixin } from './CreationRelation.js';

export interface AuthorshipRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.CreationRelation<D>, rdfine.RdfResource<D> {
  authorshipRelationHasSource: Rico.Record<D> | undefined;
  authorshipRelationHasTarget: Rico.Group<D> | Rico.Person<D> | Rico.Position<D> | undefined;
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

class AuthorshipRelationImpl extends AuthorshipRelationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AuthorshipRelation>) {
    super(arg, init)
    this.types.add(rico.AuthorshipRelation)
  }

  static readonly __mixins: Mixin[] = [AuthorshipRelationMixin, CreationRelationMixin];
}
AuthorshipRelationMixin.appliesTo = rico.AuthorshipRelation
AuthorshipRelationMixin.Class = AuthorshipRelationImpl

export const fromPointer = createFactory<AuthorshipRelation>([CreationRelationMixin, AuthorshipRelationMixin], { types: [rico.AuthorshipRelation] });
