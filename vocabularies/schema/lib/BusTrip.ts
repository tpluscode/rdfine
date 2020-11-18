import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { TripMixin } from './Trip';

export interface BusTrip<ID extends ResourceNode = ResourceNode> extends Schema.Trip<ID>, RdfResource<ID> {
  arrivalBusStop: Schema.BusStation<SiblingNode<ID>> | Schema.BusStop<SiblingNode<ID>> | undefined;
  busName: string | undefined;
  busNumber: string | undefined;
  departureBusStop: Schema.BusStation<SiblingNode<ID>> | Schema.BusStop<SiblingNode<ID>> | undefined;
}

export function BusTripMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class BusTripClass extends TripMixin(Resource) implements BusTrip {
    @property.resource()
    arrivalBusStop: Schema.BusStation | Schema.BusStop | undefined;
    @property.literal()
    busName: string | undefined;
    @property.literal()
    busNumber: string | undefined;
    @property.resource()
    departureBusStop: Schema.BusStation | Schema.BusStop | undefined;
  }
  return BusTripClass
}

class BusTripImpl extends BusTripMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<BusTrip>) {
    super(arg, init)
    this.types.add(schema.BusTrip)
  }

  static readonly __mixins: Mixin[] = [BusTripMixin, TripMixin];
}
BusTripMixin.appliesTo = schema.BusTrip
BusTripMixin.Class = BusTripImpl
