import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { as } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '../index.js';
import { ObjectMixin } from './Object.js';

export interface Note<D extends RDF.DatasetCore = RDF.DatasetCore> extends As.Object<D>, rdfine.RdfResource<D> {
}

export function NoteMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Note> & RdfResourceCore> & Base {
  @rdfine.namespace(as)
  class NoteClass extends ObjectMixin(Resource) implements Partial<Note> {
  }
  return NoteClass
}

class NoteImpl extends NoteMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Note>) {
    super(arg, init)
    this.types.add(as.Note)
  }

  static readonly __mixins: Mixin[] = [NoteMixin, ObjectMixin];
}
NoteMixin.appliesTo = as.Note
NoteMixin.Class = NoteImpl

export const fromPointer = createFactory<Note>([ObjectMixin, NoteMixin], { types: [as.Note] });
