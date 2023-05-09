import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { SequentialRelationMixin } from './SequentialRelation.js';

export interface TemporalRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.SequentialRelation<D>, RdfResource<D> {
  temporalRelationHasSource: Rico.Thing<D> | undefined;
  temporalRelationHasTarget: Rico.Thing<D> | undefined;
}

export function TemporalRelationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<TemporalRelation> & RdfResourceCore> & Base {
  @namespace(rico)
  class TemporalRelationClass extends SequentialRelationMixin(Resource) implements Partial<TemporalRelation> {
    @property.resource({ implicitTypes: [rico.Thing] })
    temporalRelationHasSource: Rico.Thing | undefined;
    @property.resource({ implicitTypes: [rico.Thing] })
    temporalRelationHasTarget: Rico.Thing | undefined;
  }
  return TemporalRelationClass
}

class TemporalRelationImpl extends TemporalRelationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<TemporalRelation>) {
    super(arg, init)
    this.types.add(rico.TemporalRelation)
  }

  static readonly __mixins: Mixin[] = [TemporalRelationMixin, SequentialRelationMixin];
}
TemporalRelationMixin.appliesTo = rico.TemporalRelation
TemporalRelationMixin.Class = TemporalRelationImpl

export const fromPointer = createFactory<TemporalRelation>([SequentialRelationMixin, TemporalRelationMixin], { types: [rico.TemporalRelation] });
