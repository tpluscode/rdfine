import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { EventMixin } from './Event.js';

export interface SportsEvent<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Event<D>, rdfine.RdfResource<D> {
  awayTeam: Schema.Person<D> | Schema.SportsTeam<D> | undefined;
  competitor: Schema.Person<D> | Schema.SportsTeam<D> | undefined;
  homeTeam: Schema.Person<D> | Schema.SportsTeam<D> | undefined;
  sport: string | undefined;
  sportTerm: RDF.NamedNode | undefined;
}

export function SportsEventMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<SportsEvent> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class SportsEventClass extends EventMixin(Resource) implements Partial<SportsEvent> {
    @rdfine.property.resource()
    awayTeam: Schema.Person | Schema.SportsTeam | undefined;
    @rdfine.property.resource()
    competitor: Schema.Person | Schema.SportsTeam | undefined;
    @rdfine.property.resource()
    homeTeam: Schema.Person | Schema.SportsTeam | undefined;
    @rdfine.property.literal()
    sport: string | undefined;
    @rdfine.property({ path: schema.sport })
    sportTerm: RDF.NamedNode | undefined;
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

export const fromPointer = createFactory<SportsEvent>([EventMixin, SportsEventMixin], { types: [schema.SportsEvent] });
