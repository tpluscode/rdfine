import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { prov } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Prov from '..';

export interface KeyEntityPair<D extends RDF.DatasetCore = RDF.DatasetCore> extends RdfResource<D> {
  pairEntity: Prov.Entity<D> | undefined;
  pairKey: RDF.Literal | undefined;
}

export function KeyEntityPairMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<KeyEntityPair> & RdfResourceCore> & Base {
  @namespace(prov)
  class KeyEntityPairClass extends Resource implements Partial<KeyEntityPair> {
    @property.resource({ implicitTypes: [prov.Entity] })
    pairEntity: Prov.Entity | undefined;
    @property()
    pairKey: RDF.Literal | undefined;
  }
  return KeyEntityPairClass
}

class KeyEntityPairImpl extends KeyEntityPairMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<KeyEntityPair>) {
    super(arg, init)
    this.types.add(prov.KeyEntityPair)
  }

  static readonly __mixins: Mixin[] = [KeyEntityPairMixin];
}
KeyEntityPairMixin.appliesTo = prov.KeyEntityPair
KeyEntityPairMixin.Class = KeyEntityPairImpl

export const fromPointer = createFactory<KeyEntityPair>([KeyEntityPairMixin], { types: [prov.KeyEntityPair] });
