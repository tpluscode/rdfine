import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { EventMixin } from './Event.js';

export interface ScreeningEvent<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Event<D>, RdfResource<D> {
  subtitleLanguage: Schema.Language<D> | undefined;
  subtitleLanguageLiteral: string | undefined;
  videoFormat: string | undefined;
  workPresented: Schema.Movie<D> | undefined;
}

export function ScreeningEventMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<ScreeningEvent> & RdfResourceCore> & Base {
  @namespace(schema)
  class ScreeningEventClass extends EventMixin(Resource) implements Partial<ScreeningEvent> {
    @property.resource()
    subtitleLanguage: Schema.Language | undefined;
    @property.literal({ path: schema.subtitleLanguage })
    subtitleLanguageLiteral: string | undefined;
    @property.literal()
    videoFormat: string | undefined;
    @property.resource()
    workPresented: Schema.Movie | undefined;
  }
  return ScreeningEventClass
}

class ScreeningEventImpl extends ScreeningEventMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ScreeningEvent>) {
    super(arg, init)
    this.types.add(schema.ScreeningEvent)
  }

  static readonly __mixins: Mixin[] = [ScreeningEventMixin, EventMixin];
}
ScreeningEventMixin.appliesTo = schema.ScreeningEvent
ScreeningEventMixin.Class = ScreeningEventImpl

export const fromPointer = createFactory<ScreeningEvent>([EventMixin, ScreeningEventMixin], { types: [schema.ScreeningEvent] });
