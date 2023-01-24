import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '..';
import { FamilyRelationMixin } from './FamilyRelation';

export interface SiblingRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.FamilyRelation<D>, RdfResource<D> {
  siblingRelationConnects: Rico.Person<D> | undefined;
}

export function SiblingRelationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<SiblingRelation> & RdfResourceCore> & Base {
  @namespace(rico)
  class SiblingRelationClass extends FamilyRelationMixin(Resource) implements Partial<SiblingRelation> {
    @property.resource({ implicitTypes: [rico.Person] })
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
