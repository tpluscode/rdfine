import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { FamilyRelationMixin } from './FamilyRelation.js';

export interface SiblingRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.FamilyRelation<D>, rdfine.RdfResource<D> {
  siblingRelationConnects: Rico.Person<D> | undefined;
}

export function SiblingRelationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<SiblingRelation> & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class SiblingRelationClass extends FamilyRelationMixin(Resource) implements Partial<SiblingRelation> {
    @rdfine.property.resource({ implicitTypes: [rico.Person] })
    siblingRelationConnects: Rico.Person | undefined;
  }
  return SiblingRelationClass
}

class SiblingRelationImpl extends SiblingRelationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SiblingRelation>) {
    super(arg, init)
    this.types.add(rico.SiblingRelation)
  }

  static readonly __mixins: Mixin[] = [SiblingRelationMixin, FamilyRelationMixin];
}
SiblingRelationMixin.appliesTo = rico.SiblingRelation
SiblingRelationMixin.Class = SiblingRelationImpl

export const fromPointer = createFactory<SiblingRelation>([FamilyRelationMixin, SiblingRelationMixin], { types: [rico.SiblingRelation] });
