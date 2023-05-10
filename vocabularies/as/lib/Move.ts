import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { as } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '../index.js';
import { ActivityMixin } from './Activity.js';

export interface Move<D extends RDF.DatasetCore = RDF.DatasetCore> extends As.Activity<D>, rdfine.RdfResource<D> {
}

export function MoveMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Move> & RdfResourceCore> & Base {
  @rdfine.namespace(as)
  class MoveClass extends ActivityMixin(Resource) implements Partial<Move> {
  }
  return MoveClass
}

class MoveImpl extends MoveMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Move>) {
    super(arg, init)
    this.types.add(as.Move)
  }

  static readonly __mixins: Mixin[] = [MoveMixin, ActivityMixin];
}
MoveMixin.appliesTo = as.Move
MoveMixin.Class = MoveImpl

export const fromPointer = createFactory<Move>([ActivityMixin, MoveMixin], { types: [as.Move] });
