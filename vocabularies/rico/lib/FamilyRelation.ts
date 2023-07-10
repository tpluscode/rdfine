import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { AgentToAgentRelationMixin } from './AgentToAgentRelation.js';

export interface FamilyRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.AgentToAgentRelation<D>, rdfine.RdfResource<D> {
  familyRelationConnects: Rico.Person<D> | undefined;
}

export function FamilyRelationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<FamilyRelation & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class FamilyRelationClass extends AgentToAgentRelationMixin(Resource) {
    @rdfine.property.resource({ implicitTypes: [rico.Person] })
    familyRelationConnects: Rico.Person | undefined;
  }
  return FamilyRelationClass as any
}

class FamilyRelationImpl extends FamilyRelationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<FamilyRelation>) {
    super(arg, init)
    this.types.add(rico.FamilyRelation)
  }

  static readonly __mixins: Mixin[] = [FamilyRelationMixin, AgentToAgentRelationMixin];
}
FamilyRelationMixin.appliesTo = rico.FamilyRelation
FamilyRelationMixin.Class = FamilyRelationImpl

export const fromPointer = createFactory<FamilyRelation>([AgentToAgentRelationMixin, FamilyRelationMixin], { types: [rico.FamilyRelation] });
