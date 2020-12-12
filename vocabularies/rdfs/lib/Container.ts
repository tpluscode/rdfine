import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { rdfs } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rdfs from '..';
import { ResourceMixin } from './Resource';

export interface Container<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdfs.Resource<D>, RdfResource<D> {
}

export function ContainerMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Container> & RdfResourceCore> & Base {
  @namespace(rdfs)
  class ContainerClass extends ResourceMixin(Resource) implements Partial<Container> {
  }
  return ContainerClass
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
