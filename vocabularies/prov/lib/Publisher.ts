import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { prov } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Prov from '..';
import { RoleMixin } from './Role';

export interface Publisher<D extends RDF.DatasetCore = RDF.DatasetCore> extends Prov.Role<D>, RdfResource<D> {
}

export function PublisherMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Publisher> & RdfResourceCore> & Base {
  @namespace(prov)
  class PublisherClass extends RoleMixin(Resource) implements Partial<Publisher> {
  }
  return PublisherClass
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
