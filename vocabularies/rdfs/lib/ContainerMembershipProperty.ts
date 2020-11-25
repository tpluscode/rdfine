import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { rdfs } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rdfs from '..';
import type * as Rdf from '@rdfine/rdf';
import { PropertyMixin as RdfPropertyMixin } from '@rdfine/rdf/lib/Property';

export interface ContainerMembershipProperty<ID extends ResourceNode = ResourceNode> extends Rdf.Property<ID>, RdfResource<ID> {
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
