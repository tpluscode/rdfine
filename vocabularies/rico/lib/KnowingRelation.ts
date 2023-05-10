import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { AgentToAgentRelationMixin } from './AgentToAgentRelation.js';

export interface KnowingRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.AgentToAgentRelation<D>, rdfine.RdfResource<D> {
  knowingRelationConnects: Rico.Person<D> | undefined;
}

export function KnowingRelationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<KnowingRelation> & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class KnowingRelationClass extends AgentToAgentRelationMixin(Resource) implements Partial<KnowingRelation> {
    @rdfine.property.resource({ implicitTypes: [rico.Person] })
    knowingRelationConnects: Rico.Person | undefined;
  }
  return KnowingRelationClass
}

class KnowingRelationImpl extends KnowingRelationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<KnowingRelation>) {
    super(arg, init)
    this.types.add(rico.KnowingRelation)
  }

  static readonly __mixins: Mixin[] = [KnowingRelationMixin, AgentToAgentRelationMixin];
}
KnowingRelationMixin.appliesTo = rico.KnowingRelation
KnowingRelationMixin.Class = KnowingRelationImpl

export const fromPointer = createFactory<KnowingRelation>([AgentToAgentRelationMixin, KnowingRelationMixin], { types: [rico.KnowingRelation] });
