import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { as } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '..';
import { ActivityMixin } from './Activity';

export interface Undo<D extends RDF.DatasetCore = RDF.DatasetCore> extends As.Activity<D>, RdfResource<D> {
}

export function UndoMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Undo> & RdfResourceCore> & Base {
  @namespace(as)
  class UndoClass extends ActivityMixin(Resource) implements Partial<Undo> {
  }
  return UndoClass
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
