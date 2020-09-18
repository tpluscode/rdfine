import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { owl } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Owl from '.';
import * as Rdf from '@rdfine/rdf';

export interface DatatypeProperty extends Rdf.Property, RdfResource {
}

export function DatatypePropertyMixin<Base extends Constructor>(Resource: Base) {
  @namespace(owl)
  class DatatypePropertyClass extends Rdf.PropertyMixin(Resource) implements DatatypeProperty {
  }
  return DatatypePropertyClass
}

class DatatypePropertyImpl extends DatatypePropertyMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<DatatypeProperty>) {
    super(arg, init)
    this.types.add(owl.DatatypeProperty)
  }

  static readonly __mixins: Mixin[] = [DatatypePropertyMixin, Rdf.PropertyMixin];
}
DatatypePropertyMixin.appliesTo = owl.DatatypeProperty
DatatypePropertyMixin.Class = DatatypePropertyImpl
