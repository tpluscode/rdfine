import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { prov } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Prov from '../index.js';
import { DerivationMixin } from './Derivation.js';

export interface PrimarySource<D extends RDF.DatasetCore = RDF.DatasetCore> extends Prov.Derivation<D>, rdfine.RdfResource<D> {
}

export function PrimarySourceMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<PrimarySource> & RdfResourceCore> & Base {
  @rdfine.namespace(prov)
  class PrimarySourceClass extends DerivationMixin(Resource) implements Partial<PrimarySource> {
  }
  return PrimarySourceClass
}

class PrimarySourceImpl extends PrimarySourceMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<PrimarySource>) {
    super(arg, init)
    this.types.add(prov.PrimarySource)
  }

  static readonly __mixins: Mixin[] = [PrimarySourceMixin, DerivationMixin];
}
PrimarySourceMixin.appliesTo = prov.PrimarySource
PrimarySourceMixin.Class = PrimarySourceImpl

export const fromPointer = createFactory<PrimarySource>([DerivationMixin, PrimarySourceMixin], { types: [prov.PrimarySource] });
