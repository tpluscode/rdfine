import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ThingMixin } from './Thing';

export interface Product<ID extends ResourceNode = ResourceNode> extends Schema.Thing<ID>, RdfResource<ID> {
  additionalProperty: Schema.PropertyValue<SiblingNode<ID>> | undefined;
  aggregateRating: Schema.AggregateRating<SiblingNode<ID>> | undefined;
  audience: Schema.Audience<SiblingNode<ID>> | undefined;
  award: string | undefined;
  awards: string | undefined;
  brand: Schema.Brand<SiblingNode<ID>> | Schema.Organization<SiblingNode<ID>> | undefined;
  category: Schema.Thing<SiblingNode<ID>> | undefined;
  categoryLiteral: string | undefined;
  color: string | undefined;
  depth: Schema.Distance<SiblingNode<ID>> | Schema.QuantitativeValue<SiblingNode<ID>> | undefined;
  gtin: string | undefined;
  'gtin12': string | undefined;
  'gtin13': string | undefined;
  'gtin14': string | undefined;
  'gtin8': string | undefined;
  hasMerchantReturnPolicy: Schema.MerchantReturnPolicy<SiblingNode<ID>> | undefined;
  height: Schema.Distance<SiblingNode<ID>> | Schema.QuantitativeValue<SiblingNode<ID>> | undefined;
  inProductGroupWithID: string | undefined;
  isAccessoryOrSparePartFor: Schema.Product<SiblingNode<ID>> | undefined;
  isConsumableFor: Schema.Product<SiblingNode<ID>> | undefined;
  isRelatedTo: Schema.Product<SiblingNode<ID>> | Schema.Service<SiblingNode<ID>> | undefined;
  isSimilarTo: Schema.Product<SiblingNode<ID>> | Schema.Service<SiblingNode<ID>> | undefined;
  isVariantOf: Schema.ProductGroup<SiblingNode<ID>> | Schema.ProductModel<SiblingNode<ID>> | undefined;
  itemCondition: Schema.OfferItemCondition | undefined;
  logo: Schema.ImageObject<SiblingNode<ID>> | undefined;
  manufacturer: Schema.Organization<SiblingNode<ID>> | undefined;
  material: Schema.Product<SiblingNode<ID>> | undefined;
  materialLiteral: string | undefined;
  model: Schema.ProductModel<SiblingNode<ID>> | undefined;
  modelLiteral: string | undefined;
  mpn: string | undefined;
  nsn: string | undefined;
  offers: Schema.Demand<SiblingNode<ID>> | Schema.Offer<SiblingNode<ID>> | undefined;
  pattern: string | undefined;
  productID: string | undefined;
  productionDate: Date | undefined;
  purchaseDate: Date | undefined;
  releaseDate: Date | undefined;
  review: Schema.Review<SiblingNode<ID>> | undefined;
  reviews: Schema.Review<SiblingNode<ID>> | undefined;
  size: Schema.QuantitativeValue<SiblingNode<ID>> | undefined;
  sizeLiteral: string | undefined;
  sku: string | undefined;
  slogan: string | undefined;
  weight: Schema.QuantitativeValue<SiblingNode<ID>> | undefined;
  width: Schema.Distance<SiblingNode<ID>> | Schema.QuantitativeValue<SiblingNode<ID>> | undefined;
}

export function ProductMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ProductClass extends ThingMixin(Resource) implements Product {
    @property.resource()
    additionalProperty: Schema.PropertyValue | undefined;
    @property.resource()
    aggregateRating: Schema.AggregateRating | undefined;
    @property.resource()
    audience: Schema.Audience | undefined;
    @property.literal()
    award: string | undefined;
    @property.literal()
    awards: string | undefined;
    @property.resource()
    brand: Schema.Brand | Schema.Organization | undefined;
    @property.resource()
    category: Schema.Thing | undefined;
    @property.literal({ path: schema.category })
    categoryLiteral: string | undefined;
    @property.literal()
    color: string | undefined;
    @property.resource()
    depth: Schema.Distance | Schema.QuantitativeValue | undefined;
    @property.literal()
    gtin: string | undefined;
    @property.literal()
    'gtin12': string | undefined;
    @property.literal()
    'gtin13': string | undefined;
    @property.literal()
    'gtin14': string | undefined;
    @property.literal()
    'gtin8': string | undefined;
    @property.resource()
    hasMerchantReturnPolicy: Schema.MerchantReturnPolicy | undefined;
    @property.resource()
    height: Schema.Distance | Schema.QuantitativeValue | undefined;
    @property.literal()
    inProductGroupWithID: string | undefined;
    @property.resource()
    isAccessoryOrSparePartFor: Schema.Product | undefined;
    @property.resource()
    isConsumableFor: Schema.Product | undefined;
    @property.resource()
    isRelatedTo: Schema.Product | Schema.Service | undefined;
    @property.resource()
    isSimilarTo: Schema.Product | Schema.Service | undefined;
    @property.resource()
    isVariantOf: Schema.ProductGroup | Schema.ProductModel | undefined;
    @property()
    itemCondition: Schema.OfferItemCondition | undefined;
    @property.resource()
    logo: Schema.ImageObject | undefined;
    @property.resource()
    manufacturer: Schema.Organization | undefined;
    @property.resource()
    material: Schema.Product | undefined;
    @property.literal({ path: schema.material })
    materialLiteral: string | undefined;
    @property.resource()
    model: Schema.ProductModel | undefined;
    @property.literal({ path: schema.model })
    modelLiteral: string | undefined;
    @property.literal()
    mpn: string | undefined;
    @property.literal()
    nsn: string | undefined;
    @property.resource()
    offers: Schema.Demand | Schema.Offer | undefined;
    @property.literal()
    pattern: string | undefined;
    @property.literal()
    productID: string | undefined;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    productionDate: Date | undefined;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    purchaseDate: Date | undefined;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    releaseDate: Date | undefined;
    @property.resource()
    review: Schema.Review | undefined;
    @property.resource()
    reviews: Schema.Review | undefined;
    @property.resource()
    size: Schema.QuantitativeValue | undefined;
    @property.literal({ path: schema.size })
    sizeLiteral: string | undefined;
    @property.literal()
    sku: string | undefined;
    @property.literal()
    slogan: string | undefined;
    @property.resource()
    weight: Schema.QuantitativeValue | undefined;
    @property.resource()
    width: Schema.Distance | Schema.QuantitativeValue | undefined;
  }
  return ProductClass
}

class ProductImpl extends ProductMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Product>) {
    super(arg, init)
    this.types.add(schema.Product)
  }

  static readonly __mixins: Mixin[] = [ProductMixin, ThingMixin];
}
ProductMixin.appliesTo = schema.Product
ProductMixin.Class = ProductImpl
