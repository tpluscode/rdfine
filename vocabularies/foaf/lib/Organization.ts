import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { foaf } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Foaf from '../index.js';
import { AgentMixin } from './Agent.js';

export interface Organization<D extends RDF.DatasetCore = RDF.DatasetCore> extends Foaf.Agent<D>, RdfResource<D> {
}

export function OrganizationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Organization> & RdfResourceCore> & Base {
  @namespace(foaf)
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
