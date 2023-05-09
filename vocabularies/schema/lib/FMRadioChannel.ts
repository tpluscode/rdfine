import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { RadioChannelMixin } from './RadioChannel.js';

export interface FMRadioChannel<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.RadioChannel<D>, rdfine.RdfResource<D> {
}

export function FMRadioChannelMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<FMRadioChannel> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class FMRadioChannelClass extends RadioChannelMixin(Resource) implements Partial<FMRadioChannel> {
  }
  return FMRadioChannelClass
}

class FMRadioChannelImpl extends FMRadioChannelMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<FMRadioChannel>) {
    super(arg, init)
    this.types.add(schema.FMRadioChannel)
  }

  static readonly __mixins: Mixin[] = [FMRadioChannelMixin, RadioChannelMixin];
}
FMRadioChannelMixin.appliesTo = schema.FMRadioChannel
FMRadioChannelMixin.Class = FMRadioChannelImpl

export const fromPointer = createFactory<FMRadioChannel>([RadioChannelMixin, FMRadioChannelMixin], { types: [schema.FMRadioChannel] });
