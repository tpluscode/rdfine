import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { prov } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Prov from '../index.js';
import { DerivationMixin } from './Derivation.js';

export interface Insertion<D extends RDF.DatasetCore = RDF.DatasetCore> extends Prov.Derivation<D>, RdfResource<D> {
  dictionary: Prov.Dictionary<D> | undefined;
  insertedKeyEntityPair: Prov.KeyEntityPair<D> | undefined;
}

export function InsertionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Insertion> & RdfResourceCore> & Base {
  @namespace(prov)
  class InsertionClass extends DerivationMixin(Resource) implements Partial<Insertion> {
    @property.resource({ implicitTypes: [prov.Dictionary] })
    dictionary: Prov.Dictionary | undefined;
    @property.resource({ implicitTypes: [prov.KeyEntityPair] })
    insertedKeyEntityPair: Prov.KeyEntityPair | undefined;
  }
  return InsertionClass
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
