import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { EventMixin } from './Event.js';

export interface VisualArtsEvent<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Event<D>, rdfine.RdfResource<D> {
}

export function VisualArtsEventMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<VisualArtsEvent> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class VisualArtsEventClass extends EventMixin(Resource) implements Partial<VisualArtsEvent> {
  }
  return VisualArtsEventClass
}

class VisualArtsEventImpl extends VisualArtsEventMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<VisualArtsEvent>) {
    super(arg, init)
    this.types.add(schema.VisualArtsEvent)
  }

  static readonly __mixins: Mixin[] = [VisualArtsEventMixin, EventMixin];
}
VisualArtsEventMixin.appliesTo = schema.VisualArtsEvent
VisualArtsEventMixin.Class = VisualArtsEventImpl

export const fromPointer = createFactory<VisualArtsEvent>([EventMixin, VisualArtsEventMixin], { types: [schema.VisualArtsEvent] });
