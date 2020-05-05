import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { rdfs } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rdfs from '.';
import type * as Rdf from '@rdfine/rdf';
import { PropertyMixin as RdfPropertyMixin } from '@rdfine/rdf/Property';

export interface ContainerMembershipProperty extends Rdf.Property, RdfResource {
}

export function ContainerMembershipPropertyMixin<Base extends Constructor>(Resource: Base) {
  @namespace(rdfs)
  class ContainerMembershipPropertyClass extends RdfPropertyMixin(Resource) implements ContainerMembershipProperty {
  }
  return ContainerMembershipPropertyClass
}

class ContainerMembershipPropertyImpl extends ContainerMembershipPropertyMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ContainerMembershipProperty>) {
    super(arg, init)
    this.types.add(rdfs.ContainerMembershipProperty)
  }

  static readonly __mixins: Mixin[] = [ContainerMembershipPropertyMixin, RdfPropertyMixin];
}
ContainerMembershipPropertyMixin.appliesTo = rdfs.ContainerMembershipProperty
ContainerMembershipPropertyMixin.Class = ContainerMembershipPropertyImpl
