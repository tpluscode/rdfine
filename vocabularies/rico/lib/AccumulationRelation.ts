import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '..';
import { AgentOriginationRelationMixin } from './AgentOriginationRelation';

export interface AccumulationRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.AgentOriginationRelation<D>, RdfResource<D> {
  accumulationRelationHasSource: Rico.Instantiation<D> | Rico.RecordResource<D> | undefined;
  accumulationRelationHasTarget: Rico.Agent<D> | undefined;
}

export function AccumulationRelationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<AccumulationRelation> & RdfResourceCore> & Base {
  @namespace(rico)
  class AccumulationRelationClass extends AgentOriginationRelationMixin(Resource) implements Partial<AccumulationRelation> {
    @property.resource()
    accumulationRelationHasSource: Rico.Instantiation | Rico.RecordResource | undefined;
    @property.resource({ implicitTypes: [rico.Agent] })
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
