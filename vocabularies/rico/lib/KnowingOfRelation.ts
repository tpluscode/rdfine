import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { AgentToAgentRelationMixin } from './AgentToAgentRelation.js';

export interface KnowingOfRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.AgentToAgentRelation<D>, rdfine.RdfResource<D> {
  knowingOfRelationHasSource: Rico.Person<D> | undefined;
  knowingOfRelationHasTarget: Rico.Person<D> | undefined;
}

export function KnowingOfRelationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<KnowingOfRelation> & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class KnowingOfRelationClass extends AgentToAgentRelationMixin(Resource) implements Partial<KnowingOfRelation> {
    @rdfine.property.resource({ implicitTypes: [rico.Person] })
    knowingOfRelationHasSource: Rico.Person | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Person] })
    knowingOfRelationHasTarget: Rico.Person | undefined;
  }
  return KnowingOfRelationClass
}

class KnowingOfRelationImpl extends KnowingOfRelationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<KnowingOfRelation>) {
    super(arg, init)
    this.types.add(rico.KnowingOfRelation)
  }

  static readonly __mixins: Mixin[] = [KnowingOfRelationMixin, AgentToAgentRelationMixin];
}
KnowingOfRelationMixin.appliesTo = rico.KnowingOfRelation
KnowingOfRelationMixin.Class = KnowingOfRelationImpl

export const fromPointer = createFactory<KnowingOfRelation>([AgentToAgentRelationMixin, KnowingOfRelationMixin], { types: [rico.KnowingOfRelation] });
