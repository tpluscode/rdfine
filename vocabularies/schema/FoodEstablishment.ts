import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { LocalBusinessMixin } from './LocalBusiness';

export interface FoodEstablishment extends Schema.LocalBusiness, RdfResource {
  acceptsReservations: boolean | string | undefined;
  acceptsReservationsTerm: RDF.NamedNode | undefined;
  hasMenu: Schema.Menu | undefined;
  hasMenuLiteral: string | undefined;
  menu: Schema.Menu | undefined;
  menuLiteral: string | undefined;
  servesCuisine: string | undefined;
  starRating: Schema.Rating | undefined;
}

export function FoodEstablishmentMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class FoodEstablishmentClass extends LocalBusinessMixin(Resource) implements FoodEstablishment {
    @property.literal()
    acceptsReservations: boolean | string | undefined;
    @property({ path: schema.acceptsReservations })
    acceptsReservationsTerm: RDF.NamedNode | undefined;
    @property.resource()
    hasMenu: Schema.Menu | undefined;
    @property.literal({ path: schema.hasMenu })
    hasMenuLiteral: string | undefined;
    @property.resource()
    menu: Schema.Menu | undefined;
    @property.literal({ path: schema.menu })
    menuLiteral: string | undefined;
    @property.literal()
    servesCuisine: string | undefined;
    @property.resource()
    starRating: Schema.Rating | undefined;
  }
  return FoodEstablishmentClass
}

class FoodEstablishmentImpl extends FoodEstablishmentMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<FoodEstablishment>) {
    super(arg, init)
    this.types.add(schema.FoodEstablishment)
  }

  static readonly __mixins: Mixin[] = [FoodEstablishmentMixin, LocalBusinessMixin];
}
FoodEstablishmentMixin.appliesTo = schema.FoodEstablishment
FoodEstablishmentMixin.Class = FoodEstablishmentImpl
