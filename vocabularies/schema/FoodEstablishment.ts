import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import LocalBusinessMixin from './LocalBusiness';

export interface FoodEstablishment extends Schema.LocalBusiness, RdfResource {
  acceptsReservations: boolean | string | string;
  hasMenu: Schema.Menu;
  hasMenuLiteral: string | string;
  menu: Schema.Menu;
  menuLiteral: string | string;
  servesCuisine: string;
  starRating: Schema.Rating;
}

export default function FoodEstablishmentMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class FoodEstablishmentClass extends LocalBusinessMixin(Resource) implements FoodEstablishment {
    @property.literal()
    acceptsReservations!: boolean | string | string;
    @property.resource()
    hasMenu!: Schema.Menu;
    @property.literal({ path: schema.hasMenu })
    hasMenuLiteral!: string | string;
    @property.resource()
    menu!: Schema.Menu;
    @property.literal({ path: schema.menu })
    menuLiteral!: string | string;
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
