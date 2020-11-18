import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { LocalBusinessMixin } from './LocalBusiness';

export interface LodgingBusiness<ID extends ResourceNode = ResourceNode> extends Schema.LocalBusiness<ID>, RdfResource<ID> {
  amenityFeature: Schema.LocationFeatureSpecification<SiblingNode<ID>> | undefined;
  audience: Schema.Audience<SiblingNode<ID>> | undefined;
  availableLanguage: Schema.Language<SiblingNode<ID>> | undefined;
  availableLanguageLiteral: string | undefined;
  checkinTime: Date | undefined;
  checkoutTime: Date | undefined;
  numberOfRooms: Schema.QuantitativeValue<SiblingNode<ID>> | undefined;
  numberOfRoomsLiteral: number | undefined;
  petsAllowed: boolean | string | undefined;
  starRating: Schema.Rating<SiblingNode<ID>> | undefined;
}

export function LodgingBusinessMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class LodgingBusinessClass extends LocalBusinessMixin(Resource) implements LodgingBusiness {
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
