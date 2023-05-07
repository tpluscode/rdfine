import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { AuthorityRelationMixin } from './AuthorityRelation.js';

export interface OwnershipRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.AuthorityRelation<D>, RdfResource<D> {
  ownershipRelationHasSource: Rico.Group<D> | Rico.Person<D> | Rico.Position<D> | undefined;
  ownershipRelationHasTarget: Rico.Thing<D> | undefined;
}

export function OwnershipRelationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<OwnershipRelation> & RdfResourceCore> & Base {
  @namespace(rico)
  class OwnershipRelationClass extends AuthorityRelationMixin(Resource) implements Partial<OwnershipRelation> {
    @property.resource()
    ownershipRelationHasSource: Rico.Group | Rico.Person | Rico.Position | undefined;
    @property.resource({ implicitTypes: [rico.Thing] })
    ownershipRelationHasTarget: Rico.Thing | undefined;
  }
  return OwnershipRelationClass
}

class OwnershipRelationImpl extends OwnershipRelationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<OwnershipRelation>) {
    super(arg, init)
    this.types.add(rico.OwnershipRelation)
  }

  static readonly __mixins: Mixin[] = [OwnershipRelationMixin, AuthorityRelationMixin];
}
OwnershipRelationMixin.appliesTo = rico.OwnershipRelation
OwnershipRelationMixin.Class = OwnershipRelationImpl

export const fromPointer = createFactory<OwnershipRelation>([AuthorityRelationMixin, OwnershipRelationMixin], { types: [rico.OwnershipRelation] });
