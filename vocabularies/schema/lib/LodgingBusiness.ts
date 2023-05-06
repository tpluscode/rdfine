import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { LocalBusinessMixin } from './LocalBusiness.js';

export interface LodgingBusiness<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.LocalBusiness<D>, RdfResource<D> {
  amenityFeature: Schema.LocationFeatureSpecification<D> | undefined;
  audience: Schema.Audience<D> | undefined;
  availableLanguage: Schema.Language<D> | undefined;
  availableLanguageLiteral: string | undefined;
  checkinTime: Date | undefined;
  checkoutTime: Date | undefined;
  numberOfRooms: Schema.QuantitativeValue<D> | undefined;
  numberOfRoomsLiteral: number | undefined;
  petsAllowed: boolean | string | undefined;
  starRating: Schema.Rating<D> | undefined;
}

export function LodgingBusinessMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<LodgingBusiness> & RdfResourceCore> & Base {
  @namespace(schema)
  class LodgingBusinessClass extends LocalBusinessMixin(Resource) implements Partial<LodgingBusiness> {
    @property.resource()
    amenityFeature: Schema.LocationFeatureSpecification | undefined;
    @property.resource()
    audience: Schema.Audience | undefined;
    @property.resource()
    availableLanguage: Schema.Language | undefined;
    @property.literal({ path: schema.availableLanguage })
    availableLanguageLiteral: string | undefined;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#time') })
    checkinTime: Date | undefined;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#time') })
    checkoutTime: Date | undefined;
    @property.resource()
    numberOfRooms: Schema.QuantitativeValue | undefined;
    @property.literal({ path: schema.numberOfRooms, type: Number })
    numberOfRoomsLiteral: number | undefined;
    @property.literal()
    petsAllowed: boolean | string | undefined;
    @property.resource()
    starRating: Schema.Rating | undefined;
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

export const fromPointer = createFactory<LodgingBusiness>([LocalBusinessMixin, LodgingBusinessMixin], { types: [schema.LodgingBusiness] });
