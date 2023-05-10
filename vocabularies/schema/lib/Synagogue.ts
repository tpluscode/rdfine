import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { PlaceOfWorshipMixin } from './PlaceOfWorship.js';

export interface Synagogue<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.PlaceOfWorship<D>, rdfine.RdfResource<D> {
}

export function SynagogueMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Synagogue> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class SynagogueClass extends PlaceOfWorshipMixin(Resource) implements Partial<Synagogue> {
  }
  return SynagogueClass
}

class SynagogueImpl extends SynagogueMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Synagogue>) {
    super(arg, init)
    this.types.add(schema.Synagogue)
  }

  static readonly __mixins: Mixin[] = [SynagogueMixin, PlaceOfWorshipMixin];
}
SynagogueMixin.appliesTo = schema.Synagogue
SynagogueMixin.Class = SynagogueImpl

export const fromPointer = createFactory<Synagogue>([PlaceOfWorshipMixin, SynagogueMixin], { types: [schema.Synagogue] });
