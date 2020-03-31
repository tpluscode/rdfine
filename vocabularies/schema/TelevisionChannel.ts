import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<TelevisionChannel>) {
    super(arg, init)
    this.types.add(schema.TelevisionChannel)
  }
}
TelevisionChannelMixin.shouldApply = (r: RdfResource) => r.types.has(schema.TelevisionChannel)
TelevisionChannelMixin.Class = TelevisionChannelImpl
