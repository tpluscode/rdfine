import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { PlaceOfWorshipMixin } from './PlaceOfWorship';

export interface Synagogue<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.PlaceOfWorship<D>, RdfResource<D> {
}

export function SynagogueMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Synagogue> & RdfResourceCore> & Base {
  @namespace(schema)
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
