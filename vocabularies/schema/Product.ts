import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import ThingMixin from './Thing';

export interface Product extends Schema.Thing, RdfResource {
  additionalProperty: Schema.PropertyValue;
  aggregateRating: Schema.AggregateRating;
  audience: Schema.Audience;
  award: string;
  awards: string;
  brand: Schema.Brand | Schema.Organization;
  category: Schema.Thing;
  categoryLiteral: string;
  color: string;
  depth: Schema.Distance | Schema.QuantitativeValue;
  gtin12: string;
  gtin13: string;
  gtin14: string;
  gtin8: string;
  height: Schema.Distance | Schema.QuantitativeValue;
  isAccessoryOrSparePartFor: Product;
  isConsumableFor: Product;
  isRelatedTo: Product | Schema.Service;
  isSimilarTo: Product | Schema.Service;
  itemCondition: Schema.OfferItemCondition;
  logo: Schema.ImageObject;
  manufacturer: Schema.Organization;
  material: Product;
  materialLiteral: string;
  model: Schema.ProductModel;
  modelLiteral: string;
  mpn: string;
  offers: Schema.Demand | Schema.Offer;
  productID: string;
  productionDate: Date;
  purchaseDate: Date;
  releaseDate: Date;
  review: Schema.Review;
  reviews: Schema.Review;
  sku: string;
  slogan: string;
  weight: Schema.QuantitativeValue;
  width: Schema.Distance | Schema.QuantitativeValue;
}

export default function ProductMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ProductClass extends ThingMixin(Resource) implements Product {
    @property.resource()
    additionalProperty!: Schema.PropertyValue;
    @property.resource()
    aggregateRating!: Schema.AggregateRating;
    @property.resource()
    audience!: Schema.Audience;
    @property.literal()
    award!: string;
    @property.literal()
    awards!: string;
    @property.resource()
    brand!: Schema.Brand | Schema.Organization;
    @property.resource()
    category!: Schema.Thing;
    @property.literal({ path: schema.category })
    categoryLiteral!: string;
    @property.literal()
    color!: string;
    @property.resource()
    depth!: Schema.Distance | Schema.QuantitativeValue;
    @property.literal()
    gtin12!: string;
    @property.literal()
    gtin13!: string;
    @property.literal()
    gtin14!: string;
    @property.literal()
    gtin8!: string;
    @property.resource()
    height!: Schema.Distance | Schema.QuantitativeValue;
    @property.resource()
    isAccessoryOrSparePartFor!: Product;
    @property.resource()
    isConsumableFor!: Product;
    @property.resource()
    isRelatedTo!: Product | Schema.Service;
    @property.resource()
    isSimilarTo!: Product | Schema.Service;
    @property()
    itemCondition!: Schema.OfferItemCondition;
    @property.resource()
    logo!: Schema.ImageObject;
    @property.resource()
    manufacturer!: Schema.Organization;
    @property.resource()
    material!: Product;
    @property.literal({ path: schema.material })
    materialLiteral!: string;
    @property.resource()
    model!: Schema.ProductModel;
    @property.literal({ path: schema.model })
    modelLiteral!: string;
    @property.literal()
    mpn!: string;
    @property.resource()
    offers!: Schema.Demand | Schema.Offer;
    @property.literal()
    productID!: string;
    @property.literal()
    productionDate!: Date;
    @property.literal()
    purchaseDate!: Date;
    @property.literal()
    releaseDate!: Date;
    @property.resource()
    review!: Schema.Review;
    @property.resource()
    reviews!: Schema.Review;
    @property.literal()
    sku!: string;
    @property.literal()
    slogan!: string;
    @property.resource()
    weight!: Schema.QuantitativeValue;
    @property.resource()
    width!: Schema.Distance | Schema.QuantitativeValue;
  }
  return ProductClass
}

class ProductImpl extends ProductMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<Product>) {
    super(arg)
    this.types.add(schema.Product)
    initializeProperties<Product>(this, init)
  }
}
ProductMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Product)
ProductMixin.Class = ProductImpl
