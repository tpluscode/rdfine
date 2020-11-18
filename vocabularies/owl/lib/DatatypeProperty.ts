import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { owl } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Owl from '..';
import type * as Rdf from '@rdfine/rdf';
import { PropertyMixin as RdfPropertyMixin } from '@rdfine/rdf/lib/Property';

export interface DatatypeProperty<ID extends ResourceNode = ResourceNode> extends Rdf.Property<ID>, RdfResource<ID> {
}

export function DatatypePropertyMixin<Base extends Constructor>(Resource: Base) {
  @namespace(owl)
  class DatatypePropertyClass extends RdfPropertyMixin(Resource) implements DatatypeProperty {
  }
  return DatatypePropertyClass
}

class DatatypePropertyImpl extends DatatypePropertyMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<DatatypeProperty>) {
    super(arg, init)
    this.types.add(owl.DatatypeProperty)
  }

  static readonly __mixins: Mixin[] = [DatatypePropertyMixin, RdfPropertyMixin];
}
DatatypePropertyMixin.appliesTo = owl.DatatypeProperty
DatatypePropertyMixin.Class = DatatypePropertyImpl
