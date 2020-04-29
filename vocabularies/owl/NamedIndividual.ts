import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { owl } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Owl from '.';

export interface NamedIndividual extends RdfResource {
}

export function NamedIndividualMixin<Base extends Constructor>(Resource: Base) {
  @namespace(owl)
  class NamedIndividualClass extends Resource implements NamedIndividual {
  }
  return NamedIndividualClass
}

class NamedIndividualImpl extends NamedIndividualMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<NamedIndividual>) {
    super(arg, init)
    this.types.add(owl.NamedIndividual)
  }
}
NamedIndividualMixin.shouldApply = (r: RdfResource) => r.types.has(owl.NamedIndividual)
NamedIndividualMixin.Class = NamedIndividualImpl
