import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { AuthorityRelationMixin } from './AuthorityRelation.js';

export interface IntellectualPropertyRightsRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.AuthorityRelation<D>, rdfine.RdfResource<D> {
  intellectualPropertyRightsRelationHasSource: Rico.Group<D> | Rico.Person<D> | Rico.Position<D> | undefined;
  intellectualPropertyRightsRelationHasTarget: Rico.Instantiation<D> | Rico.RecordResource<D> | undefined;
}

export function IntellectualPropertyRightsRelationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<IntellectualPropertyRightsRelation> & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class IntellectualPropertyRightsRelationClass extends AuthorityRelationMixin(Resource) implements Partial<IntellectualPropertyRightsRelation> {
    @rdfine.property.resource()
    intellectualPropertyRightsRelationHasSource: Rico.Group | Rico.Person | Rico.Position | undefined;
    @rdfine.property.resource()
    intellectualPropertyRightsRelationHasTarget: Rico.Instantiation | Rico.RecordResource | undefined;
  }
  return IntellectualPropertyRightsRelationClass
}

class IntellectualPropertyRightsRelationImpl extends IntellectualPropertyRightsRelationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<IntellectualPropertyRightsRelation>) {
    super(arg, init)
    this.types.add(rico.IntellectualPropertyRightsRelation)
  }

  static readonly __mixins: Mixin[] = [IntellectualPropertyRightsRelationMixin, AuthorityRelationMixin];
}
IntellectualPropertyRightsRelationMixin.appliesTo = rico.IntellectualPropertyRightsRelation
IntellectualPropertyRightsRelationMixin.Class = IntellectualPropertyRightsRelationImpl

export const fromPointer = createFactory<IntellectualPropertyRightsRelation>([AuthorityRelationMixin, IntellectualPropertyRightsRelationMixin], { types: [rico.IntellectualPropertyRightsRelation] });
