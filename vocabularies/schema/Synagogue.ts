import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { PlaceOfWorshipMixin } from './PlaceOfWorship';

export interface Synagogue extends Schema.PlaceOfWorship, RdfResource {
}

export function SynagogueMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class SynagogueClass extends PlaceOfWorshipMixin(Resource) implements Synagogue {
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
