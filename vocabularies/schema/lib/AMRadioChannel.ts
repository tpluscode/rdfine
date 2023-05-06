import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { RadioChannelMixin } from './RadioChannel.js';

export interface AMRadioChannel<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.RadioChannel<D>, RdfResource<D> {
}

export function AMRadioChannelMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<AMRadioChannel> & RdfResourceCore> & Base {
  @namespace(schema)
  class AMRadioChannelClass extends RadioChannelMixin(Resource) implements Partial<AMRadioChannel> {
  }
  return AMRadioChannelClass
}

class AMRadioChannelImpl extends AMRadioChannelMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AMRadioChannel>) {
    super(arg, init)
    this.types.add(schema.AMRadioChannel)
  }

  static readonly __mixins: Mixin[] = [AMRadioChannelMixin, RadioChannelMixin];
}
AMRadioChannelMixin.appliesTo = schema.AMRadioChannel
AMRadioChannelMixin.Class = AMRadioChannelImpl

export const fromPointer = createFactory<AMRadioChannel>([RadioChannelMixin, AMRadioChannelMixin], { types: [schema.AMRadioChannel] });
