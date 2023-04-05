import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { rdf } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rdf from '..';

export interface Seq<D extends RDF.DatasetCore = RDF.DatasetCore> extends RdfResource<D> {
}

export function SeqMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Seq> & RdfResourceCore> & Base {
  @namespace(rdf)
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
