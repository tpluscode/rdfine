import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { EventMixin } from './Event';

export interface MusicEvent<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Event<D>, RdfResource<D> {
}

export function MusicEventMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MusicEventClass extends EventMixin(Resource) implements MusicEvent {
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
