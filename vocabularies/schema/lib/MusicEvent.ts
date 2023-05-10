import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { EventMixin } from './Event.js';

export interface MusicEvent<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Event<D>, rdfine.RdfResource<D> {
}

export function MusicEventMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<MusicEvent> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class MusicEventClass extends EventMixin(Resource) implements Partial<MusicEvent> {
  }
  return MusicEventClass
}

class MusicEventImpl extends MusicEventMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MusicEvent>) {
    super(arg, init)
    this.types.add(schema.MusicEvent)
  }

  static readonly __mixins: Mixin[] = [MusicEventMixin, EventMixin];
}
MusicEventMixin.appliesTo = schema.MusicEvent
MusicEventMixin.Class = MusicEventImpl

export const fromPointer = createFactory<MusicEvent>([EventMixin, MusicEventMixin], { types: [schema.MusicEvent] });
