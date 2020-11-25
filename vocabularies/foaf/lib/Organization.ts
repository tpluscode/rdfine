import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { foaf } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Foaf from '..';
import { AgentMixin } from './Agent';

export interface Organization<ID extends ResourceNode = ResourceNode> extends Foaf.Agent<ID>, RdfResource<ID> {
}

export function OrganizationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(foaf)
  class OrganizationClass extends AgentMixin(Resource) implements Organization {
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
