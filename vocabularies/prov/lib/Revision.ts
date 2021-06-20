import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { prov } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Prov from '..';
import { DerivationMixin } from './Derivation';

export interface Revision<D extends RDF.DatasetCore = RDF.DatasetCore> extends Prov.Derivation<D>, RdfResource<D> {
}

export function RevisionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Revision> & RdfResourceCore> & Base {
  @namespace(prov)
  class RevisionClass extends DerivationMixin(Resource) implements Partial<Revision> {
  }
  return RevisionClass
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
