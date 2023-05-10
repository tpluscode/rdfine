import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { prov } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Prov from '../index.js';
import { SoftwareAgentMixin } from './SoftwareAgent.js';

export interface ServiceDescription<D extends RDF.DatasetCore = RDF.DatasetCore> extends Prov.SoftwareAgent<D>, rdfine.RdfResource<D> {
}

export function ServiceDescriptionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<ServiceDescription> & RdfResourceCore> & Base {
  @rdfine.namespace(prov)
  class ServiceDescriptionClass extends SoftwareAgentMixin(Resource) implements Partial<ServiceDescription> {
  }
  return ServiceDescriptionClass
}

class ServiceDescriptionImpl extends ServiceDescriptionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ServiceDescription>) {
    super(arg, init)
    this.types.add(prov.ServiceDescription)
  }

  static readonly __mixins: Mixin[] = [ServiceDescriptionMixin, SoftwareAgentMixin];
}
ServiceDescriptionMixin.appliesTo = prov.ServiceDescription
ServiceDescriptionMixin.Class = ServiceDescriptionImpl

export const fromPointer = createFactory<ServiceDescription>([SoftwareAgentMixin, ServiceDescriptionMixin], { types: [prov.ServiceDescription] });
