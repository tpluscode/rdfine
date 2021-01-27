import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { prov } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Prov from '..';
import { SoftwareAgentMixin } from './SoftwareAgent';

export interface ServiceDescription<D extends RDF.DatasetCore = RDF.DatasetCore> extends Prov.SoftwareAgent<D>, RdfResource<D> {
}

export function ServiceDescriptionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<ServiceDescription> & RdfResourceCore> & Base {
  @namespace(prov)
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
