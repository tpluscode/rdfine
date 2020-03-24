import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import CreativeWorkMixin from './CreativeWork';

export interface Sculpture extends Schema.CreativeWork, RdfResource {
}

export default function SculptureMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class SculptureClass extends CreativeWorkMixin(Resource) implements Sculpture {
  }
  return SculptureClass
}

class SculptureImpl extends SculptureMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.Sculpture)
  }
}
SculptureMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Sculpture)
SculptureMixin.Class = SculptureImpl
