import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { prov } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Prov from '../index.js';
import { AgentMixin } from './Agent.js';

export interface Organization<D extends RDF.DatasetCore = RDF.DatasetCore> extends Prov.Agent<D>, rdfine.RdfResource<D> {
}

export function OrganizationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Organization & RdfResourceCore> & Base {
  @rdfine.namespace(prov)
  class OrganizationClass extends AgentMixin(Resource) {
  }
  return OrganizationClass as any
}

class OrganizationImpl extends OrganizationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Organization>) {
    super(arg, init)
    this.types.add(prov.Organization)
  }

  static readonly __mixins: Mixin[] = [OrganizationMixin, AgentMixin];
}
OrganizationMixin.appliesTo = prov.Organization
OrganizationMixin.Class = OrganizationImpl

export const fromPointer = createFactory<Organization>([AgentMixin, OrganizationMixin], { types: [prov.Organization] });
