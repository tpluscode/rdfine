import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '..';
import { AgentToAgentRelationMixin } from './AgentToAgentRelation';

export interface KnowingOfRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.AgentToAgentRelation<D>, RdfResource<D> {
  knowingOfRelationHasSource: Rico.Person<D> | undefined;
  knowingOfRelationHasTarget: Rico.Person<D> | undefined;
}

export function KnowingOfRelationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<KnowingOfRelation> & RdfResourceCore> & Base {
  @namespace(rico)
  class KnowingOfRelationClass extends AgentToAgentRelationMixin(Resource) implements Partial<KnowingOfRelation> {
    @property.resource({ implicitTypes: [rico.Person] })
    knowingOfRelationHasSource: Rico.Person | undefined;
    @property.resource({ implicitTypes: [rico.Person] })
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
