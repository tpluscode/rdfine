import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { RadioChannelMixin } from './RadioChannel.js';

export interface AMRadioChannel<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.RadioChannel<D>, rdfine.RdfResource<D> {
}

export function AMRadioChannelMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<AMRadioChannel & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class AMRadioChannelClass extends RadioChannelMixin(Resource) {
  }
  return AMRadioChannelClass as any
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
