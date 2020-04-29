import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { owl } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Owl from '.';
import type * as Rdf from '@rdfine/rdf';
import { PropertyMixin as RdfPropertyMixin } from '@rdfine/rdf/Property';

export interface OntologyProperty extends Rdf.Property, RdfResource {
}

export function OntologyPropertyMixin<Base extends Constructor>(Resource: Base) {
  @namespace(owl)
  class OntologyPropertyClass extends RdfPropertyMixin(Resource) implements OntologyProperty {
  }
  return OntologyPropertyClass
}

class OntologyPropertyImpl extends OntologyPropertyMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<OntologyProperty>) {
    super(arg, init)
    this.types.add(owl.OntologyProperty)
  }
}
OntologyPropertyMixin.shouldApply = (r: RdfResource) => r.types.has(owl.OntologyProperty)
OntologyPropertyMixin.Class = OntologyPropertyImpl
