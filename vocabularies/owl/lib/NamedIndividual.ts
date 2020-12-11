import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { owl } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Owl from '..';

export interface NamedIndividual<D extends RDF.DatasetCore = RDF.DatasetCore> extends RdfResource<D> {
}

export function NamedIndividualMixin<Base extends Constructor>(Resource: Base): Constructor<NamedIndividual> & Base {
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
