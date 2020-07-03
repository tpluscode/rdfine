import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { rdfs } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rdfs from '.';
import * as Rdf from '@rdfine/rdf';

export interface ContainerMembershipProperty extends Rdf.Property, RdfResource {
}

export function ContainerMembershipPropertyMixin<Base extends Constructor>(Resource: Base) {
  @namespace(rdfs)
  class ContainerMembershipPropertyClass extends Rdf.PropertyMixin(Resource) implements ContainerMembershipProperty {
  }
  return ContainerMembershipPropertyClass
}

class ContainerMembershipPropertyImpl extends ContainerMembershipPropertyMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ContainerMembershipProperty>) {
    super(arg, init)
    this.types.add(rdfs.ContainerMembershipProperty)
  }

  static readonly __mixins: Mixin[] = [ContainerMembershipPropertyMixin, Rdf.PropertyMixin];
}
ContainerMembershipPropertyMixin.appliesTo = rdfs.ContainerMembershipProperty
ContainerMembershipPropertyMixin.Class = ContainerMembershipPropertyImpl
