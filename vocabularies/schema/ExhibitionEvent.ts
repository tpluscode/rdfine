import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { EventMixin } from './Event';

export interface ExhibitionEvent extends Schema.Event, RdfResource {
}

export function ExhibitionEventMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ExhibitionEventClass extends EventMixin(Resource) implements ExhibitionEvent {
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
