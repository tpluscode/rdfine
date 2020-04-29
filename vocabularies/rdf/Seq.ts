import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { rdf } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Rdf from '.';

export interface Seq extends RdfResource {
}

export function SeqMixin<Base extends Constructor>(Resource: Base) {
  @namespace(rdf)
  class SeqClass extends Resource implements Seq {
  }
  return SeqClass
}

class SeqImpl extends SeqMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Seq>) {
    super(arg, init)
    this.types.add(rdf.Seq)
  }
}
SeqMixin.shouldApply = (r: RdfResource) => r.types.has(rdf.Seq)
SeqMixin.Class = SeqImpl
