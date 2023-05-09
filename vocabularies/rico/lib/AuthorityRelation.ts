import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { RelationMixin } from './Relation.js';

export interface AuthorityRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Relation<D>, rdfine.RdfResource<D> {
  authorityRelationHasSource: Rico.Agent<D> | undefined;
  authorityRelationHasTarget: Rico.Thing<D> | undefined;
}

export function AuthorityRelationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<AuthorityRelation> & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class AuthorityRelationClass extends RelationMixin(Resource) implements Partial<AuthorityRelation> {
    @rdfine.property.resource({ implicitTypes: [rico.Agent] })
    authorityRelationHasSource: Rico.Agent | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Thing] })
    authorityRelationHasTarget: Rico.Thing | undefined;
  }
  return AuthorityRelationClass
}

class AuthorityRelationImpl extends AuthorityRelationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AuthorityRelation>) {
    super(arg, init)
    this.types.add(rico.AuthorityRelation)
  }

  static readonly __mixins: Mixin[] = [AuthorityRelationMixin, RelationMixin];
}
AuthorityRelationMixin.appliesTo = rico.AuthorityRelation
AuthorityRelationMixin.Class = AuthorityRelationImpl

export const fromPointer = createFactory<AuthorityRelation>([RelationMixin, AuthorityRelationMixin], { types: [rico.AuthorityRelation] });
