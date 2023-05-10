import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { AgentOriginationRelationMixin } from './AgentOriginationRelation.js';

export interface AccumulationRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.AgentOriginationRelation<D>, rdfine.RdfResource<D> {
  accumulationRelationHasSource: Rico.Instantiation<D> | Rico.RecordResource<D> | undefined;
  accumulationRelationHasTarget: Rico.Agent<D> | undefined;
}

export function AccumulationRelationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<AccumulationRelation> & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class AccumulationRelationClass extends AgentOriginationRelationMixin(Resource) implements Partial<AccumulationRelation> {
    @rdfine.property.resource()
    accumulationRelationHasSource: Rico.Instantiation | Rico.RecordResource | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Agent] })
    accumulationRelationHasTarget: Rico.Agent | undefined;
  }
  return AccumulationRelationClass
}

class AccumulationRelationImpl extends AccumulationRelationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AccumulationRelation>) {
    super(arg, init)
    this.types.add(rico.AccumulationRelation)
  }

  static readonly __mixins: Mixin[] = [AccumulationRelationMixin, AgentOriginationRelationMixin];
}
AccumulationRelationMixin.appliesTo = rico.AccumulationRelation
AccumulationRelationMixin.Class = AccumulationRelationImpl

export const fromPointer = createFactory<AccumulationRelation>([AgentOriginationRelationMixin, AccumulationRelationMixin], { types: [rico.AccumulationRelation] });
