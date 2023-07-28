import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { prov } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Prov from '../index.js';
import { DerivationMixin } from './Derivation.js';

export interface Revision<D extends RDF.DatasetCore = RDF.DatasetCore> extends Prov.Derivation<D>, rdfine.RdfResource<D> {
}

export function RevisionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Revision & RdfResourceCore> & Base {
  @rdfine.namespace(prov)
  class RevisionClass extends DerivationMixin(Resource) {
  }
  return RevisionClass as any
}

class RevisionImpl extends RevisionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Revision>) {
    super(arg, init)
    this.types.add(prov.Revision)
  }

  static readonly __mixins: Mixin[] = [RevisionMixin, DerivationMixin];
}
RevisionMixin.appliesTo = prov.Revision
RevisionMixin.Class = RevisionImpl

export const fromPointer = createFactory<Revision>([DerivationMixin, RevisionMixin], { types: [prov.Revision] });
