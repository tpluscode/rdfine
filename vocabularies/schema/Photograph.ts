import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import CreativeWorkMixin from './CreativeWork';

export interface Photograph extends Schema.CreativeWork, RdfResource {
}

export default function PhotographMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PhotographClass extends CreativeWorkMixin(Resource) implements Photograph {
  }
  return PhotographClass
}

class PhotographImpl extends PhotographMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<Photograph>) {
    super(arg)
    this.types.add(schema.Photograph)
    initializeProperties<Photograph>(this, init)
  }
}
PhotographMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Photograph)
PhotographMixin.Class = PhotographImpl
