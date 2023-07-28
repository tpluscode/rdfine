import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { owl } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Owl from '../index.js';

export interface NamedIndividual<D extends RDF.DatasetCore = RDF.DatasetCore> extends rdfine.RdfResource<D> {
}

export function NamedIndividualMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<NamedIndividual & RdfResourceCore> & Base {
  @rdfine.namespace(owl)
  class NamedIndividualClass extends Resource {
  }
  return NamedIndividualClass as any
}

class NamedIndividualImpl extends NamedIndividualMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<NamedIndividual>) {
    super(arg, init)
    this.types.add(owl.NamedIndividual)
  }

  static readonly __mixins: Mixin[] = [NamedIndividualMixin];
}
NamedIndividualMixin.appliesTo = owl.NamedIndividual
NamedIndividualMixin.Class = NamedIndividualImpl

export const fromPointer = createFactory<NamedIndividual>([NamedIndividualMixin], { types: [owl.NamedIndividual] });
