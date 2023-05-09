import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { EventRelationMixin } from './EventRelation.js';

export interface PerformanceRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.EventRelation<D>, rdfine.RdfResource<D> {
  performanceRelationHasSource: Rico.Activity<D> | undefined;
  performanceRelationHasTarget: Rico.Agent<D> | undefined;
}

export function PerformanceRelationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<PerformanceRelation> & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class PerformanceRelationClass extends EventRelationMixin(Resource) implements Partial<PerformanceRelation> {
    @rdfine.property.resource({ implicitTypes: [rico.Activity] })
    performanceRelationHasSource: Rico.Activity | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Agent] })
    performanceRelationHasTarget: Rico.Agent | undefined;
  }
  return PerformanceRelationClass
}

class PerformanceRelationImpl extends PerformanceRelationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<PerformanceRelation>) {
    super(arg, init)
    this.types.add(rico.PerformanceRelation)
  }

  static readonly __mixins: Mixin[] = [PerformanceRelationMixin, EventRelationMixin];
}
PerformanceRelationMixin.appliesTo = rico.PerformanceRelation
PerformanceRelationMixin.Class = PerformanceRelationImpl

export const fromPointer = createFactory<PerformanceRelation>([EventRelationMixin, PerformanceRelationMixin], { types: [rico.PerformanceRelation] });
