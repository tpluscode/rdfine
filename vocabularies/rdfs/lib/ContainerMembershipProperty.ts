import '../extensions/rdf/Property.js';
import { PropertyMixinEx } from '../extensions/rdf/Property.js';
import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rdfs } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rdfs from '../index.js';
import type * as Rdf from '@rdfine/rdf';
import { PropertyMixin as RdfPropertyMixin } from '@rdfine/rdf/lib/Property';

export interface ContainerMembershipProperty<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdf.Property<D>, rdfine.RdfResource<D> {
}

export function ContainerMembershipPropertyMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<ContainerMembershipProperty> & RdfResourceCore> & Base {
  @rdfine.namespace(rdfs)
  class ContainerMembershipPropertyClass extends PropertyMixinEx(RdfPropertyMixin(Resource)) implements Partial<ContainerMembershipProperty> {
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

export const fromPointer = createFactory<ContainerMembershipProperty>([RdfPropertyMixin, ContainerMembershipPropertyMixin], { types: [rdfs.ContainerMembershipProperty] });
