import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { AgentToAgentRelationMixin } from './AgentToAgentRelation.js';

export interface PositionHoldingRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.AgentToAgentRelation<D>, rdfine.RdfResource<D> {
  positionHoldingRelationHasSource: Rico.Person<D> | undefined;
  positionHoldingRelationHasTarget: Rico.Position<D> | undefined;
}

export function PositionHoldingRelationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<PositionHoldingRelation & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class PositionHoldingRelationClass extends AgentToAgentRelationMixin(Resource) {
    @rdfine.property.resource({ implicitTypes: [rico.Person] })
    positionHoldingRelationHasSource: Rico.Person | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Position] })
    positionHoldingRelationHasTarget: Rico.Position | undefined;
  }
  return PositionHoldingRelationClass as any
}

class PositionHoldingRelationImpl extends PositionHoldingRelationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<PositionHoldingRelation>) {
    super(arg, init)
    this.types.add(rico.PositionHoldingRelation)
  }

  static readonly __mixins: Mixin[] = [PositionHoldingRelationMixin, AgentToAgentRelationMixin];
}
PositionHoldingRelationMixin.appliesTo = rico.PositionHoldingRelation
PositionHoldingRelationMixin.Class = PositionHoldingRelationImpl

export const fromPointer = createFactory<PositionHoldingRelation>([AgentToAgentRelationMixin, PositionHoldingRelationMixin], { types: [rico.PositionHoldingRelation] });
