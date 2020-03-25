import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import EventMixin from './Event';

export interface SportsEvent extends Schema.Event, RdfResource {
  awayTeam: Schema.Person | Schema.SportsTeam;
  competitor: Schema.Person | Schema.SportsTeam;
  homeTeam: Schema.Person | Schema.SportsTeam;
}

export default function SportsEventMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class SportsEventClass extends EventMixin(Resource) implements SportsEvent {
    @property.resource()
    awayTeam!: Schema.Person | Schema.SportsTeam;
    @property.resource()
    competitor!: Schema.Person | Schema.SportsTeam;
    @property.resource()
    homeTeam!: Schema.Person | Schema.SportsTeam;
  }
  return SportsEventClass
}

class SportsEventImpl extends SportsEventMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<SportsEvent>) {
    super(arg)
    this.types.add(schema.SportsEvent)
    initializeProperties<SportsEvent>(this, init)
  }
}
SportsEventMixin.shouldApply = (r: RdfResource) => r.types.has(schema.SportsEvent)
SportsEventMixin.Class = SportsEventImpl
