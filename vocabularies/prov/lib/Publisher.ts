import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { prov } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Prov from '../index.js';
import { RoleMixin } from './Role.js';

export interface Publisher<D extends RDF.DatasetCore = RDF.DatasetCore> extends Prov.Role<D>, rdfine.RdfResource<D> {
}

export function PublisherMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Publisher & RdfResourceCore> & Base {
  @rdfine.namespace(prov)
  class PublisherClass extends RoleMixin(Resource) {
  }
  return PublisherClass as any
}

class PublisherImpl extends PublisherMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Publisher>) {
    super(arg, init)
    this.types.add(prov.Publisher)
  }

  static readonly __mixins: Mixin[] = [PublisherMixin, RoleMixin];
}
PublisherMixin.appliesTo = prov.Publisher
PublisherMixin.Class = PublisherImpl

export const fromPointer = createFactory<Publisher>([RoleMixin, PublisherMixin], { types: [prov.Publisher] });
