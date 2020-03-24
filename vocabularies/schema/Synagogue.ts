import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import PlaceOfWorshipMixin from './PlaceOfWorship';

export interface Synagogue extends Schema.PlaceOfWorship, RdfResource {
}

export default function SynagogueMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class SynagogueClass extends PlaceOfWorshipMixin(Resource) implements Synagogue {
  }
  return SynagogueClass
}

class SynagogueImpl extends SynagogueMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.Synagogue)
  }
}
SynagogueMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Synagogue)
SynagogueMixin.Class = SynagogueImpl
