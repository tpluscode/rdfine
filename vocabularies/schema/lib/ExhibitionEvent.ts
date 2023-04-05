import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { EventMixin } from './Event.js';

export interface ExhibitionEvent<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Event<D>, RdfResource<D> {
}

export function ExhibitionEventMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<ExhibitionEvent> & RdfResourceCore> & Base {
  @namespace(schema)
  class ExhibitionEventClass extends EventMixin(Resource) implements Partial<ExhibitionEvent> {
  }
  return ExhibitionEventClass
}

class ExhibitionEventImpl extends ExhibitionEventMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ExhibitionEvent>) {
    super(arg, init)
    this.types.add(schema.ExhibitionEvent)
  }

  static readonly __mixins: Mixin[] = [ExhibitionEventMixin, EventMixin];
}
ExhibitionEventMixin.appliesTo = schema.ExhibitionEvent
ExhibitionEventMixin.Class = ExhibitionEventImpl

export const fromPointer = createFactory<ExhibitionEvent>([EventMixin, ExhibitionEventMixin], { types: [schema.ExhibitionEvent] });
