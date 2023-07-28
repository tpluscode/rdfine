import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { sioc } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sioc from '../index.js';
import { ContainerMixin } from './Container.js';

export interface Thread<D extends RDF.DatasetCore = RDF.DatasetCore> extends Sioc.Container<D>, rdfine.RdfResource<D> {
}

export function ThreadMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Thread & RdfResourceCore> & Base {
  @rdfine.namespace(sioc)
  class ThreadClass extends ContainerMixin(Resource) {
  }
  return ThreadClass as any
}

class ThreadImpl extends ThreadMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Thread>) {
    super(arg, init)
    this.types.add(sioc.Thread)
  }

  static readonly __mixins: Mixin[] = [ThreadMixin, ContainerMixin];
}
ThreadMixin.appliesTo = sioc.Thread
ThreadMixin.Class = ThreadImpl

export const fromPointer = createFactory<Thread>([ContainerMixin, ThreadMixin], { types: [sioc.Thread] });
