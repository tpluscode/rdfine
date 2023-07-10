import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rdfs } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rdfs from '../index.js';
import { ResourceMixin } from './Resource.js';

export interface Container<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdfs.Resource<D>, rdfine.RdfResource<D> {
}

export function ContainerMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Container & RdfResourceCore> & Base {
  @rdfine.namespace(rdfs)
  class ContainerClass extends ResourceMixin(Resource) {
  }
  return ContainerClass as any
}

class ContainerImpl extends ContainerMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Container>) {
    super(arg, init)
    this.types.add(rdfs.Container)
  }

  static readonly __mixins: Mixin[] = [ContainerMixin, ResourceMixin];
}
ContainerMixin.appliesTo = rdfs.Container
ContainerMixin.Class = ContainerImpl

export const fromPointer = createFactory<Container>([ResourceMixin, ContainerMixin], { types: [rdfs.Container] });
