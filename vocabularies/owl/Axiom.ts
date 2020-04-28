import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { owl } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Owl from '.';
import type * as Rdfs from '@rdfine/rdfs';
import RdfsResourceMixin from '@rdfine/rdfs/Resource';

export interface Axiom extends Rdfs.Resource, RdfResource {
}

export default function AxiomMixin<Base extends Constructor>(Resource: Base) {
  @namespace(owl)
  class AxiomClass extends RdfsResourceMixin(Resource) implements Axiom {
  }
  return AxiomClass
}

class AxiomImpl extends AxiomMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Axiom>) {
    super(arg, init)
    this.types.add(owl.Axiom)
  }
}
AxiomMixin.shouldApply = (r: RdfResource) => r.types.has(owl.Axiom)
AxiomMixin.Class = AxiomImpl
