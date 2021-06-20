import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { BroadcastChannelMixin } from './BroadcastChannel';

export interface RadioChannel<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.BroadcastChannel<D>, RdfResource<D> {
}

export function RadioChannelMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<RadioChannel> & RdfResourceCore> & Base {
  @namespace(schema)
  class RadioChannelClass extends BroadcastChannelMixin(Resource) implements Partial<RadioChannel> {
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

export const fromPointer = createFactory<RadioChannel>([BroadcastChannelMixin, RadioChannelMixin], { types: [schema.RadioChannel] });
