import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { owl } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Owl from '../index.js';

export interface NamedIndividual<D extends RDF.DatasetCore = RDF.DatasetCore> extends RdfResource<D> {
}

export function NamedIndividualMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<NamedIndividual> & RdfResourceCore> & Base {
  @namespace(owl)
  class NamedIndividualClass extends Resource implements Partial<NamedIndividual> {
  }
  return NamedIndividualClass
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
