import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { as } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '../index.js';
import { ActivityMixin } from './Activity.js';

export interface Undo<D extends RDF.DatasetCore = RDF.DatasetCore> extends As.Activity<D>, rdfine.RdfResource<D> {
}

export function UndoMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Undo & RdfResourceCore> & Base {
  @rdfine.namespace(as)
  class UndoClass extends ActivityMixin(Resource) {
  }
  return UndoClass as any
}

class UndoImpl extends UndoMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Undo>) {
    super(arg, init)
    this.types.add(as.Undo)
  }

  static readonly __mixins: Mixin[] = [UndoMixin, ActivityMixin];
}
UndoMixin.appliesTo = as.Undo
UndoMixin.Class = UndoImpl

export const fromPointer = createFactory<Undo>([ActivityMixin, UndoMixin], { types: [as.Undo] });
