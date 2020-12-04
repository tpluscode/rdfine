import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { sioc } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sioc from '..';
import { ContainerMixin } from './Container';

export interface Thread<D extends RDF.DatasetCore = RDF.DatasetCore> extends Sioc.Container<D>, RdfResource<D> {
}

export function ThreadMixin<Base extends Constructor>(Resource: Base): Constructor<Thread> & Base {
  @namespace(sioc)
  class ThreadClass extends ContainerMixin(Resource) implements Thread {
  }
  return ThreadClass
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
