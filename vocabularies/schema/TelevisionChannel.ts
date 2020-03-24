import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import BroadcastChannelMixin from './BroadcastChannel';

export interface TelevisionChannel extends Schema.BroadcastChannel, RdfResource {
}

export default function TelevisionChannelMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class TelevisionChannelClass extends BroadcastChannelMixin(Resource) implements TelevisionChannel {
  }
  return TelevisionChannelClass
}

class TelevisionChannelImpl extends TelevisionChannelMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<TelevisionChannel>) {
    super(arg)
    this.types.add(schema.TelevisionChannel)
    initializeProperties(this, init)
  }
}
TelevisionChannelMixin.shouldApply = (r: RdfResource) => r.types.has(schema.TelevisionChannel)
TelevisionChannelMixin.Class = TelevisionChannelImpl
