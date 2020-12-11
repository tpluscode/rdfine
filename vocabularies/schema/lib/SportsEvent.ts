import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { EventMixin } from './Event';

export interface SportsEvent<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Event<D>, RdfResource<D> {
  awayTeam: Schema.Person<D> | Schema.SportsTeam<D> | undefined;
  competitor: Schema.Person<D> | Schema.SportsTeam<D> | undefined;
  homeTeam: Schema.Person<D> | Schema.SportsTeam<D> | undefined;
  sport: string | undefined;
  sportTerm: RDF.NamedNode | undefined;
}

export function SportsEventMixin<Base extends Constructor>(Resource: Base): Constructor<SportsEvent> & Base {
  @namespace(schema)
  class SportsEventClass extends EventMixin(Resource) implements Partial<SportsEvent> {
    @property.resource()
    awayTeam: Schema.Person | Schema.SportsTeam | undefined;
    @property.resource()
    competitor: Schema.Person | Schema.SportsTeam | undefined;
    @property.resource()
    homeTeam: Schema.Person | Schema.SportsTeam | undefined;
    @property.literal()
    sport: string | undefined;
    @property({ path: schema.sport })
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
