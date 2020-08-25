import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { EventMixin } from './Event';

export interface SocialEvent extends Schema.Event, RdfResource {
}

export function SocialEventMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class SocialEventClass extends EventMixin(Resource) implements SocialEvent {
  }
  return SocialEventClass
}

class SocialEventImpl extends SocialEventMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SocialEvent>) {
    super(arg, init)
    this.types.add(schema.SocialEvent)
  }

  static readonly __mixins: Mixin[] = [SocialEventMixin, EventMixin];
}
SocialEventMixin.appliesTo = schema.SocialEvent
SocialEventMixin.Class = SocialEventImpl
