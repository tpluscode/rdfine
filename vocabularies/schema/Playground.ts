import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<Playground>) {
    super(arg)
    this.types.add(schema.Playground)
    initializeProperties(this, init)
  }
}
PlaygroundMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Playground)
PlaygroundMixin.Class = PlaygroundImpl
