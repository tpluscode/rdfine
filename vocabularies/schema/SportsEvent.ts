import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { EventMixin } from './Event';

export interface SportsEvent extends Schema.Event, RdfResource {
  awayTeam: Schema.Person | Schema.SportsTeam | undefined;
  competitor: Schema.Person | Schema.SportsTeam | undefined;
  homeTeam: Schema.Person | Schema.SportsTeam | undefined;
}

export function SportsEventMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class SportsEventClass extends EventMixin(Resource) implements SportsEvent {
    @property.resource()
    awayTeam: Schema.Person | Schema.SportsTeam | undefined;
    @property.resource()
    competitor: Schema.Person | Schema.SportsTeam | undefined;
    @property.resource()
    homeTeam: Schema.Person | Schema.SportsTeam | undefined;
  }
  return SportsEventClass
}

class SportsEventImpl extends SportsEventMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SportsEvent>) {
    super(arg, init)
    this.types.add(schema.SportsEvent)
  }

  static readonly __mixins: Mixin[] = [SportsEventMixin, EventMixin];
}
SportsEventMixin.appliesTo = schema.SportsEvent
SportsEventMixin.Class = SportsEventImpl
