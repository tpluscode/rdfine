import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CivicStructureMixin } from './CivicStructure';

export interface EventVenue<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CivicStructure<D>, RdfResource<D> {
}

export function EventVenueMixin<Base extends Constructor>(Resource: Base): Constructor<EventVenue> & Base {
  @namespace(schema)
  class EventVenueClass extends CivicStructureMixin(Resource) implements EventVenue {
  }
  return EventVenueClass
}

class EventVenueImpl extends EventVenueMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<EventVenue>) {
    super(arg, init)
    this.types.add(schema.EventVenue)
  }

  static readonly __mixins: Mixin[] = [EventVenueMixin, CivicStructureMixin];
}
EventVenueMixin.appliesTo = schema.EventVenue
EventVenueMixin.Class = EventVenueImpl
