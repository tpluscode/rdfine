import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { PlaceOfWorshipMixin } from './PlaceOfWorship.js';

export interface Mosque<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.PlaceOfWorship<D>, rdfine.RdfResource<D> {
}

export function MosqueMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Mosque & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class MosqueClass extends PlaceOfWorshipMixin(Resource) {
  }
  return MosqueClass as any
}

class MosqueImpl extends MosqueMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Mosque>) {
    super(arg, init)
    this.types.add(schema.Mosque)
  }

  static readonly __mixins: Mixin[] = [MosqueMixin, PlaceOfWorshipMixin];
}
MosqueMixin.appliesTo = schema.Mosque
MosqueMixin.Class = MosqueImpl

export const fromPointer = createFactory<Mosque>([PlaceOfWorshipMixin, MosqueMixin], { types: [schema.Mosque] });
