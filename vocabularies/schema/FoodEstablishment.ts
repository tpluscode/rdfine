import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import LocalBusinessMixin from './LocalBusiness';

export interface FoodEstablishment extends Schema.LocalBusiness, RdfResource {
  acceptsReservations: rdf.Term;
  acceptsReservationsLiteral: boolean | string;
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
    @property()
    acceptsReservations!: rdf.Term;
    @property.literal({ path: schema.acceptsReservations })
    acceptsReservationsLiteral!: boolean | string;
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.FoodEstablishment)
  }
}
FoodEstablishmentMixin.shouldApply = (r: RdfResource) => r.types.has(schema.FoodEstablishment)
FoodEstablishmentMixin.Class = FoodEstablishmentImpl
