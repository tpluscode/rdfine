import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { BroadcastChannelMixin } from './BroadcastChannel';

export interface TelevisionChannel<ID extends ResourceNode = ResourceNode> extends Schema.BroadcastChannel<ID>, RdfResource<ID> {
}

export function TelevisionChannelMixin<Base extends Constructor>(Resource: Base) {
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

  static readonly __mixins: Mixin[] = [TelevisionChannelMixin, BroadcastChannelMixin];
}
TelevisionChannelMixin.appliesTo = schema.TelevisionChannel
TelevisionChannelMixin.Class = TelevisionChannelImpl
