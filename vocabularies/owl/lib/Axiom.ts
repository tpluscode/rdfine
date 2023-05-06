import '../extensions/rdfs/Resource.js';
import { ResourceMixinEx } from '../extensions/rdfs/Resource.js';
import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { owl } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Owl from '../index.js';
import type * as Rdfs from '@rdfine/rdfs';
import { ResourceMixin as RdfsResourceMixin } from '@rdfine/rdfs/lib/Resource.js';

export interface Axiom<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdfs.Resource<D>, RdfResource<D> {
}

export function AxiomMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Axiom> & RdfResourceCore> & Base {
  @namespace(owl)
  class AxiomClass extends ResourceMixinEx(RdfsResourceMixin(Resource)) implements Partial<Axiom> {
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

export const fromPointer = createFactory<Axiom>([RdfsResourceMixin, AxiomMixin], { types: [owl.Axiom] });
