import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { owl } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Owl from '.';
import * as Rdf from '@rdfine/rdf';

export interface OntologyProperty extends Rdf.Property, RdfResource {
}

export function OntologyPropertyMixin<Base extends Constructor>(Resource: Base) {
  @namespace(owl)
  class OntologyPropertyClass extends Rdf.PropertyMixin(Resource) implements OntologyProperty {
  }
  return OntologyPropertyClass
}

class OntologyPropertyImpl extends OntologyPropertyMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<OntologyProperty>) {
    super(arg, init)
    this.types.add(owl.OntologyProperty)
  }

  static readonly __mixins: Mixin[] = [OntologyPropertyMixin, Rdf.PropertyMixin];
}
OntologyPropertyMixin.appliesTo = owl.OntologyProperty
OntologyPropertyMixin.Class = OntologyPropertyImpl
