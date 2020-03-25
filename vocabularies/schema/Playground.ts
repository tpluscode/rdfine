import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import CivicStructureMixin from './CivicStructure';

export interface Playground extends Schema.CivicStructure, RdfResource {
}

export default function PlaygroundMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PlaygroundClass extends CivicStructureMixin(Resource) implements Playground {
  }
  return PlaygroundClass
}

class PlaygroundImpl extends PlaygroundMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Playground>) {
    super(arg, init)
    this.types.add(schema.Playground)
  }
}
PlaygroundMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Playground)
PlaygroundMixin.Class = PlaygroundImpl
