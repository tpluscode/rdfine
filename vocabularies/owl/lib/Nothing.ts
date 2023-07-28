import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { owl } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Owl from '../index.js';

export interface Nothing<D extends RDF.DatasetCore = RDF.DatasetCore> extends rdfine.RdfResource<D> {
}

export function NothingMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Nothing & RdfResourceCore> & Base {
  @rdfine.namespace(owl)
  class NothingClass extends Resource {
  }
  return NothingClass as any
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

export const fromPointer = createFactory<Nothing>([NothingMixin], { types: [owl.Nothing] });
