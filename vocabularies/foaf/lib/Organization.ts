import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { foaf } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Foaf from '../index.js';
import { AgentMixin } from './Agent.js';

export interface Organization<D extends RDF.DatasetCore = RDF.DatasetCore> extends Foaf.Agent<D>, rdfine.RdfResource<D> {
}

export function OrganizationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Organization> & RdfResourceCore> & Base {
  @rdfine.namespace(foaf)
  class OrganizationClass extends AgentMixin(Resource) implements Partial<Organization> {
  }
  return OrganizationClass
}

class OrganizationImpl extends OrganizationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Organization>) {
    super(arg, init)
    this.types.add(foaf.Organization)
  }

  static readonly __mixins: Mixin[] = [OrganizationMixin, AgentMixin];
}
OrganizationMixin.appliesTo = foaf.Organization
OrganizationMixin.Class = OrganizationImpl

export const fromPointer = createFactory<Organization>([AgentMixin, OrganizationMixin], { types: [foaf.Organization] });
