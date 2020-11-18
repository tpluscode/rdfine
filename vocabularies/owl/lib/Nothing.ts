import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { owl } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Owl from '..';

export interface Nothing<D extends RDF.DatasetCore = RDF.DatasetCore> extends RdfResource<D> {
}

export function NothingMixin<Base extends Constructor>(Resource: Base) {
  @namespace(owl)
  class NothingClass extends Resource implements Nothing {
  }
  return NothingClass
}

class NothingImpl extends NothingMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Nothing>) {
    super(arg, init)
    this.types.add(owl.Nothing)
  }

  static readonly __mixins: Mixin[] = [NothingMixin];
}
NothingMixin.appliesTo = owl.Nothing
NothingMixin.Class = NothingImpl
