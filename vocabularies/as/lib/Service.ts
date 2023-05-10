import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { as } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '../index.js';
import { ObjectMixin } from './Object.js';

export interface Service<D extends RDF.DatasetCore = RDF.DatasetCore> extends As.Object<D>, rdfine.RdfResource<D> {
}

export function ServiceMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Service> & RdfResourceCore> & Base {
  @rdfine.namespace(as)
  class ServiceClass extends ObjectMixin(Resource) implements Partial<Service> {
  }
  return ServiceClass
}

class ServiceImpl extends ServiceMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Service>) {
    super(arg, init)
    this.types.add(as.Service)
  }

  static readonly __mixins: Mixin[] = [ServiceMixin, ObjectMixin];
}
ServiceMixin.appliesTo = as.Service
ServiceMixin.Class = ServiceImpl

export const fromPointer = createFactory<Service>([ObjectMixin, ServiceMixin], { types: [as.Service] });
