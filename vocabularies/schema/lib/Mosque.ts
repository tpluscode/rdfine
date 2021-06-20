import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { PlaceOfWorshipMixin } from './PlaceOfWorship';

export interface Mosque<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.PlaceOfWorship<D>, RdfResource<D> {
}

export function MosqueMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Mosque> & RdfResourceCore> & Base {
  @namespace(schema)
  class MosqueClass extends PlaceOfWorshipMixin(Resource) implements Partial<Mosque> {
  }
  return MosqueClass
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
