import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { prov } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Prov from '../index.js';
import { DerivationMixin } from './Derivation.js';

export interface Removal<D extends RDF.DatasetCore = RDF.DatasetCore> extends Prov.Derivation<D>, rdfine.RdfResource<D> {
  dictionary: Prov.Dictionary<D> | undefined;
  removedKey: RDF.Literal | undefined;
}

export function RemovalMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Removal> & RdfResourceCore> & Base {
  @rdfine.namespace(prov)
  class RemovalClass extends DerivationMixin(Resource) implements Partial<Removal> {
    @rdfine.property.resource({ implicitTypes: [prov.Dictionary] })
    dictionary: Prov.Dictionary | undefined;
    @rdfine.property()
    removedKey: RDF.Literal | undefined;
  }
  return RemovalClass
}

class RemovalImpl extends RemovalMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Removal>) {
    super(arg, init)
    this.types.add(prov.Removal)
  }

  static readonly __mixins: Mixin[] = [RemovalMixin, DerivationMixin];
}
RemovalMixin.appliesTo = prov.Removal
RemovalMixin.Class = RemovalImpl

export const fromPointer = createFactory<Removal>([DerivationMixin, RemovalMixin], { types: [prov.Removal] });
