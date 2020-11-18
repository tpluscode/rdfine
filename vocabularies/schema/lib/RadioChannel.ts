import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { BroadcastChannelMixin } from './BroadcastChannel';

export interface RadioChannel<ID extends ResourceNode = ResourceNode> extends Schema.BroadcastChannel<ID>, RdfResource<ID> {
}

export function RadioChannelMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class RadioChannelClass extends BroadcastChannelMixin(Resource) implements RadioChannel {
  }
  return RadioChannelClass
}

class RadioChannelImpl extends RadioChannelMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<RadioChannel>) {
    super(arg, init)
    this.types.add(schema.RadioChannel)
  }

  static readonly __mixins: Mixin[] = [RadioChannelMixin, BroadcastChannelMixin];
}
RadioChannelMixin.appliesTo = schema.RadioChannel
RadioChannelMixin.Class = RadioChannelImpl
