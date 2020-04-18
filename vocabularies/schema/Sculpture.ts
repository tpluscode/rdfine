import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<Sculpture>) {
    super(arg, init)
    this.types.add(schema.Sculpture)
  }
}
SculptureMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Sculpture)
SculptureMixin.Class = SculptureImpl
