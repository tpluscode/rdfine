import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rdf } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rdf from '../index.js';

export interface Seq<D extends RDF.DatasetCore = RDF.DatasetCore> extends rdfine.RdfResource<D> {
}

export function SeqMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Seq> & RdfResourceCore> & Base {
  @rdfine.namespace(rdf)
  class SeqClass extends Resource implements Partial<Seq> {
  }
  return SeqClass
}

class SeqImpl extends SeqMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Seq>) {
    super(arg, init)
    this.types.add(rdf.Seq)
  }

  static readonly __mixins: Mixin[] = [SeqMixin];
}
SeqMixin.appliesTo = rdf.Seq
SeqMixin.Class = SeqImpl

export const fromPointer = createFactory<Seq>([SeqMixin], { types: [rdf.Seq] });
