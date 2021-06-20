import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ThingMixin } from './Thing';

export interface Product<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Thing<D>, RdfResource<D> {
  additionalProperty: Schema.PropertyValue<D> | undefined;
  aggregateRating: Schema.AggregateRating<D> | undefined;
  audience: Schema.Audience<D> | undefined;
  award: string | undefined;
  awards: string | undefined;
  brand: Schema.Brand<D> | Schema.Organization<D> | undefined;
  category: Schema.Thing<D> | undefined;
  categoryLiteral: string | undefined;
  color: string | undefined;
  depth: Schema.Distance<D> | Schema.QuantitativeValue<D> | undefined;
  gtin: string | undefined;
  'gtin12': string | undefined;
  'gtin13': string | undefined;
  'gtin14': string | undefined;
  'gtin8': string | undefined;
  hasMerchantReturnPolicy: Schema.MerchantReturnPolicy<D> | undefined;
  height: Schema.Distance<D> | Schema.QuantitativeValue<D> | undefined;
  inProductGroupWithID: string | undefined;
  isAccessoryOrSparePartFor: Schema.Product<D> | undefined;
  isConsumableFor: Schema.Product<D> | undefined;
  isRelatedTo: Schema.Product<D> | Schema.Service<D> | undefined;
  isSimilarTo: Schema.Product<D> | Schema.Service<D> | undefined;
  isVariantOf: Schema.ProductGroup<D> | Schema.ProductModel<D> | undefined;
  itemCondition: Schema.OfferItemCondition | undefined;
  logo: Schema.ImageObject<D> | undefined;
  manufacturer: Schema.Organization<D> | undefined;
  material: Schema.Product<D> | undefined;
  materialLiteral: string | undefined;
  model: Schema.ProductModel<D> | undefined;
  modelLiteral: string | undefined;
  mpn: string | undefined;
  nsn: string | undefined;
  offers: Schema.Demand<D> | Schema.Offer<D> | undefined;
  pattern: string | undefined;
  productID: string | undefined;
  productionDate: Date | undefined;
  purchaseDate: Date | undefined;
  releaseDate: Date | undefined;
  review: Schema.Review<D> | undefined;
  reviews: Schema.Review<D> | undefined;
  size: Schema.QuantitativeValue<D> | undefined;
  sizeLiteral: string | undefined;
  sku: string | undefined;
  slogan: string | undefined;
  weight: Schema.QuantitativeValue<D> | undefined;
  width: Schema.Distance<D> | Schema.QuantitativeValue<D> | undefined;
}

export function ProductMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Product> & RdfResourceCore> & Base {
  @namespace(schema)
  class ProductClass extends ThingMixin(Resource) implements Partial<Product> {
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

export const fromPointer = createFactory<Product>([ThingMixin, ProductMixin], { types: [schema.Product] });
