import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { LocalBusinessMixin } from './LocalBusiness';

export interface LodgingBusiness extends Schema.LocalBusiness, RdfResource {
  amenityFeature: Schema.LocationFeatureSpecification;
  audience: Schema.Audience;
  availableLanguage: Schema.Language;
  availableLanguageLiteral: string;
  checkinTime: Date;
  checkoutTime: Date;
  numberOfRooms: Schema.QuantitativeValue;
  numberOfRoomsLiteral: number;
  petsAllowed: boolean | string;
  starRating: Schema.Rating;
}

export function LodgingBusinessMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class LodgingBusinessClass extends LocalBusinessMixin(Resource) implements LodgingBusiness {
    @property.resource()
    amenityFeature!: Schema.LocationFeatureSpecification;
    @property.resource()
    audience!: Schema.Audience;
    @property.resource()
    availableLanguage!: Schema.Language;
    @property.literal({ path: schema.availableLanguage })
    availableLanguageLiteral!: string;
    @property.literal()
    checkinTime!: Date;
    @property.literal()
    checkoutTime!: Date;
    @property.resource()
    numberOfRooms!: Schema.QuantitativeValue;
    @property.literal({ path: schema.numberOfRooms, type: Number })
    numberOfRoomsLiteral!: number;
    @property.literal()
    petsAllowed!: boolean | string;
    @property.resource()
    starRating!: Schema.Rating;
  }
  return LodgingBusinessClass
}

class LodgingBusinessImpl extends LodgingBusinessMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<LodgingBusiness>) {
    super(arg, init)
    this.types.add(schema.LodgingBusiness)
  }

  static readonly __mixins: Mixin[] = [LodgingBusinessMixin, LocalBusinessMixin];
}
LodgingBusinessMixin.appliesTo = schema.LodgingBusiness
LodgingBusinessMixin.Class = LodgingBusinessImpl
