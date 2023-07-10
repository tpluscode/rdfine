import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { prov } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Prov from '../index.js';
import { DerivationMixin } from './Derivation.js';

export interface Insertion<D extends RDF.DatasetCore = RDF.DatasetCore> extends Prov.Derivation<D>, rdfine.RdfResource<D> {
  dictionary: Prov.Dictionary<D> | undefined;
  insertedKeyEntityPair: Prov.KeyEntityPair<D> | undefined;
}

export function InsertionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Insertion & RdfResourceCore> & Base {
  @rdfine.namespace(prov)
  class InsertionClass extends DerivationMixin(Resource) {
    @rdfine.property.resource({ implicitTypes: [prov.Dictionary] })
    dictionary: Prov.Dictionary | undefined;
    @rdfine.property.resource({ implicitTypes: [prov.KeyEntityPair] })
    insertedKeyEntityPair: Prov.KeyEntityPair | undefined;
  }
  return InsertionClass as any
}

class InsertionImpl extends InsertionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Insertion>) {
    super(arg, init)
    this.types.add(prov.Insertion)
  }

  static readonly __mixins: Mixin[] = [InsertionMixin, DerivationMixin];
}
InsertionMixin.appliesTo = prov.Insertion
InsertionMixin.Class = InsertionImpl

export const fromPointer = createFactory<Insertion>([DerivationMixin, InsertionMixin], { types: [prov.Insertion] });
