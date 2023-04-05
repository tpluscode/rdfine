import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { prov } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Prov from '../index.js';

export interface Dictionary<D extends RDF.DatasetCore = RDF.DatasetCore> extends RdfResource<D> {
  derivedByInsertionFrom: Prov.Dictionary<D> | undefined;
  derivedByRemovalFrom: Prov.Dictionary<D> | undefined;
  hadDictionaryMember: Array<Prov.KeyEntityPair<D>>;
  qualifiedInsertion: Array<Prov.Insertion<D>>;
  qualifiedRemoval: Array<Prov.Removal<D>>;
}

export function DictionaryMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Dictionary> & RdfResourceCore> & Base {
  @namespace(prov)
  class DictionaryClass extends Resource implements Partial<Dictionary> {
    @property.resource({ as: [DictionaryMixin] })
    derivedByInsertionFrom: Prov.Dictionary | undefined;
    @property.resource({ as: [DictionaryMixin] })
    derivedByRemovalFrom: Prov.Dictionary | undefined;
    @property.resource({ values: 'array', implicitTypes: [prov.KeyEntityPair] })
    hadDictionaryMember!: Array<Prov.KeyEntityPair>;
    @property.resource({ values: 'array', implicitTypes: [prov.Insertion] })
    qualifiedInsertion!: Array<Prov.Insertion>;
    @property.resource({ values: 'array', implicitTypes: [prov.Removal] })
    qualifiedRemoval!: Array<Prov.Removal>;
  }
  return DictionaryClass
}

class DictionaryImpl extends DictionaryMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Dictionary>) {
    super(arg, init)
    this.types.add(prov.Dictionary)
  }

  static readonly __mixins: Mixin[] = [DictionaryMixin];
}
DictionaryMixin.appliesTo = prov.Dictionary
DictionaryMixin.Class = DictionaryImpl

export const fromPointer = createFactory<Dictionary>([DictionaryMixin], { types: [prov.Dictionary] });
