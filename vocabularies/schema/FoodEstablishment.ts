import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import LocalBusinessMixin from './LocalBusiness';

export interface FoodEstablishment extends Schema.LocalBusiness, RdfResource {
  acceptsReservations: boolean | string;
  acceptsReservationsTerm: rdf.NamedNode;
  hasMenu: Schema.Menu;
  hasMenuLiteral: string;
  menu: Schema.Menu;
  menuLiteral: string;
  servesCuisine: string;
  starRating: Schema.Rating;
}

export default function FoodEstablishmentMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class FoodEstablishmentClass extends LocalBusinessMixin(Resource) implements FoodEstablishment {
    @property.literal()
    acceptsReservations!: boolean | string;
    @property({ path: schema.acceptsReservations })
    acceptsReservationsTerm!: rdf.NamedNode;
    @property.resource()
    hasMenu!: Schema.Menu;
    @property.literal({ path: schema.hasMenu })
    hasMenuLiteral!: string;
    @property.resource()
    menu!: Schema.Menu;
    @property.literal({ path: schema.menu })
    menuLiteral!: string;
    @property.literal()
    servesCuisine!: string;
    @property.resource()
    starRating!: Schema.Rating;
  }
  return FoodEstablishmentClass
}

class FoodEstablishmentImpl extends FoodEstablishmentMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<FoodEstablishment>) {
    super(arg, init)
    this.types.add(schema.FoodEstablishment)
  }
}
FoodEstablishmentMixin.shouldApply = (r: RdfResource) => r.types.has(schema.FoodEstablishment)
FoodEstablishmentMixin.Class = FoodEstablishmentImpl
