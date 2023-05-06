import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { LocalBusinessMixin } from './LocalBusiness.js';

export interface FoodEstablishment<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.LocalBusiness<D>, RdfResource<D> {
  acceptsReservations: boolean | string | undefined;
  acceptsReservationsTerm: RDF.NamedNode | undefined;
  hasMenu: Schema.Menu<D> | undefined;
  hasMenuLiteral: string | undefined;
  menu: Schema.Menu<D> | undefined;
  menuLiteral: string | undefined;
  servesCuisine: string | undefined;
  starRating: Schema.Rating<D> | undefined;
}

export function FoodEstablishmentMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<FoodEstablishment> & RdfResourceCore> & Base {
  @namespace(schema)
  class FoodEstablishmentClass extends LocalBusinessMixin(Resource) implements Partial<FoodEstablishment> {
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

export const fromPointer = createFactory<FoodEstablishment>([LocalBusinessMixin, FoodEstablishmentMixin], { types: [schema.FoodEstablishment] });
