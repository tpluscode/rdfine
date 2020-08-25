import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { PlaceOfWorshipMixin } from './PlaceOfWorship';

export interface Mosque extends Schema.PlaceOfWorship, RdfResource {
}

export function MosqueMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MosqueClass extends PlaceOfWorshipMixin(Resource) implements Mosque {
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
