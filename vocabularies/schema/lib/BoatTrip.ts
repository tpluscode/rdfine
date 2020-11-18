import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { TripMixin } from './Trip';

export interface BoatTrip<ID extends ResourceNode = ResourceNode> extends Schema.Trip<ID>, RdfResource<ID> {
  arrivalBoatTerminal: Schema.BoatTerminal<SiblingNode<ID>> | undefined;
  departureBoatTerminal: Schema.BoatTerminal<SiblingNode<ID>> | undefined;
}

export function BoatTripMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class BoatTripClass extends TripMixin(Resource) implements BoatTrip {
    @property.resource()
    arrivalBoatTerminal: Schema.BoatTerminal | undefined;
    @property.resource()
    departureBoatTerminal: Schema.BoatTerminal | undefined;
  }
  return BoatTripClass
}

class BoatTripImpl extends BoatTripMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<BoatTrip>) {
    super(arg, init)
    this.types.add(schema.BoatTrip)
  }

  static readonly __mixins: Mixin[] = [BoatTripMixin, TripMixin];
}
BoatTripMixin.appliesTo = schema.BoatTrip
BoatTripMixin.Class = BoatTripImpl
