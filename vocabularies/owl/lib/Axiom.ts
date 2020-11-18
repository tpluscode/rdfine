import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { owl } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Owl from '..';
import type * as Rdfs from '@rdfine/rdfs';
import { ResourceMixin as RdfsResourceMixin } from '@rdfine/rdfs/lib/Resource';

export interface Axiom<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdfs.Resource<D>, RdfResource<D> {
}

export function AxiomMixin<Base extends Constructor>(Resource: Base) {
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

  static readonly __mixins: Mixin[] = [AxiomMixin, RdfsResourceMixin];
}
AxiomMixin.appliesTo = owl.Axiom
AxiomMixin.Class = AxiomImpl
