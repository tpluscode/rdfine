import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { prov } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Prov from '..';

export interface Dictionary<D extends RDF.DatasetCore = RDF.DatasetCore> extends RdfResource<D> {
  derivedByInsertionFrom: Prov.Dictionary<D> | undefined;
  derivedByRemovalFrom: Prov.Dictionary<D> | undefined;
  hadDictionaryMember: Prov.KeyEntityPair<D> | undefined;
  qualifiedInsertion: Prov.Insertion<D> | undefined;
  qualifiedRemoval: Prov.Removal<D> | undefined;
}

export function DictionaryMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Dictionary> & RdfResourceCore> & Base {
  @namespace(prov)
  class DictionaryClass extends Resource implements Partial<Dictionary> {
    @property.resource({ as: [DictionaryMixin] })
    derivedByInsertionFrom: Prov.Dictionary | undefined;
    @property.resource({ as: [DictionaryMixin] })
    derivedByRemovalFrom: Prov.Dictionary | undefined;
    @property.resource({ implicitTypes: [prov.KeyEntityPair] })
    hadDictionaryMember: Prov.KeyEntityPair | undefined;
    @property.resource({ implicitTypes: [prov.Insertion] })
    qualifiedInsertion: Prov.Insertion | undefined;
    @property.resource({ implicitTypes: [prov.Removal] })
    qualifiedRemoval: Prov.Removal | undefined;
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
