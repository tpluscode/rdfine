import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { prov } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Prov from '../index.js';

export interface KeyEntityPair<D extends RDF.DatasetCore = RDF.DatasetCore> extends rdfine.RdfResource<D> {
  pairEntity: Prov.Entity<D> | undefined;
  pairKey: RDF.Literal | undefined;
}

export function KeyEntityPairMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<KeyEntityPair & RdfResourceCore> & Base {
  @rdfine.namespace(prov)
  class KeyEntityPairClass extends Resource {
    @rdfine.property.resource({ implicitTypes: [prov.Entity] })
    pairEntity: Prov.Entity | undefined;
    @rdfine.property()
    pairKey: RDF.Literal | undefined;
  }
  return KeyEntityPairClass as any
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
