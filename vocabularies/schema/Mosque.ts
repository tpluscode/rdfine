import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import PlaceOfWorshipMixin from './PlaceOfWorship';

export interface Mosque extends Schema.PlaceOfWorship, RdfResource {
}

export default function MosqueMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MosqueClass extends PlaceOfWorshipMixin(Resource) implements Mosque {
  }
  return MosqueClass
}

class MosqueImpl extends MosqueMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.Mosque)
  }
}
MosqueMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Mosque)
MosqueMixin.Class = MosqueImpl
