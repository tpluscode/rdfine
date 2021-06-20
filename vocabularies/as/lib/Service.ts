import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { as } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '..';
import { ObjectMixin } from './Object';

export interface Service<D extends RDF.DatasetCore = RDF.DatasetCore> extends As.Object<D>, RdfResource<D> {
}

export function ServiceMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Service> & RdfResourceCore> & Base {
  @namespace(as)
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
