import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { BroadcastChannelMixin } from './BroadcastChannel';

export interface TelevisionChannel<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.BroadcastChannel<D>, RdfResource<D> {
}

export function TelevisionChannelMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<TelevisionChannel> & RdfResourceCore> & Base {
  @namespace(schema)
  class TelevisionChannelClass extends BroadcastChannelMixin(Resource) implements Partial<TelevisionChannel> {
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

export const fromPointer = createFactory<TelevisionChannel>([BroadcastChannelMixin, TelevisionChannelMixin], { types: [schema.TelevisionChannel] });
