import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { PlaceOfWorshipMixin } from './PlaceOfWorship.js';

export interface BuddhistTemple<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.PlaceOfWorship<D>, rdfine.RdfResource<D> {
}

export function BuddhistTempleMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<BuddhistTemple> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class BuddhistTempleClass extends PlaceOfWorshipMixin(Resource) implements Partial<BuddhistTemple> {
  }
  return BuddhistTempleClass
}

class BuddhistTempleImpl extends BuddhistTempleMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<BuddhistTemple>) {
    super(arg, init)
    this.types.add(schema.BuddhistTemple)
  }

  static readonly __mixins: Mixin[] = [BuddhistTempleMixin, PlaceOfWorshipMixin];
}
BuddhistTempleMixin.appliesTo = schema.BuddhistTemple
BuddhistTempleMixin.Class = BuddhistTempleImpl

export const fromPointer = createFactory<BuddhistTemple>([PlaceOfWorshipMixin, BuddhistTempleMixin], { types: [schema.BuddhistTemple] });
