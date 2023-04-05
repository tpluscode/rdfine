import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { IntangibleMixin } from './Intangible';

export interface MerchantReturnPolicy<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Intangible<D>, RdfResource<D> {
  additionalProperty: Schema.PropertyValue<D> | undefined;
  customerRemorseReturnFees: Schema.ReturnFeesEnumeration | undefined;
  customerRemorseReturnLabelSource: Schema.ReturnLabelSourceEnumeration | undefined;
  customerRemorseReturnShippingFeesAmount: Schema.MonetaryAmount<D> | undefined;
  inStoreReturnsOffered: boolean | undefined;
  itemCondition: Schema.OfferItemCondition | undefined;
  itemDefectReturnFees: Schema.ReturnFeesEnumeration | undefined;
  itemDefectReturnLabelSource: Schema.ReturnLabelSourceEnumeration | undefined;
  itemDefectReturnShippingFeesAmount: Schema.MonetaryAmount<D> | undefined;
  merchantReturnDays: Date | number | undefined;
  merchantReturnLink: RDF.NamedNode | undefined;
  refundType: Schema.RefundTypeEnumeration | undefined;
  restockingFee: Schema.MonetaryAmount<D> | undefined;
  restockingFeeLiteral: number | undefined;
  returnFees: Schema.ReturnFeesEnumeration | undefined;
  returnLabelSource: Schema.ReturnLabelSourceEnumeration | undefined;
  returnMethod: Schema.ReturnMethodEnumeration | undefined;
  returnPolicyCategory: Schema.MerchantReturnEnumeration | undefined;
  returnPolicyCountry: Schema.Country<D> | undefined;
  returnPolicyCountryLiteral: string | undefined;
  returnPolicySeasonalOverride: Schema.MerchantReturnPolicySeasonalOverride<D> | undefined;
  returnShippingFeesAmount: Schema.MonetaryAmount<D> | undefined;
}

export function MerchantReturnPolicyMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<MerchantReturnPolicy> & RdfResourceCore> & Base {
  @namespace(schema)
  class MerchantReturnPolicyClass extends IntangibleMixin(Resource) implements Partial<MerchantReturnPolicy> {
    @property.resource()
    additionalProperty: Schema.PropertyValue | undefined;
    @property()
    customerRemorseReturnFees: Schema.ReturnFeesEnumeration | undefined;
    @property()
    customerRemorseReturnLabelSource: Schema.ReturnLabelSourceEnumeration | undefined;
    @property.resource()
    customerRemorseReturnShippingFeesAmount: Schema.MonetaryAmount | undefined;
    @property.literal({ type: Boolean })
    inStoreReturnsOffered: boolean | undefined;
    @property()
    itemCondition: Schema.OfferItemCondition | undefined;
    @property()
    itemDefectReturnFees: Schema.ReturnFeesEnumeration | undefined;
    @property()
    itemDefectReturnLabelSource: Schema.ReturnLabelSourceEnumeration | undefined;
    @property.resource()
    itemDefectReturnShippingFeesAmount: Schema.MonetaryAmount | undefined;
    @property.literal({ datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    merchantReturnDays: Date | number | undefined;
    @property()
    merchantReturnLink: RDF.NamedNode | undefined;
    @property()
    refundType: Schema.RefundTypeEnumeration | undefined;
    @property.resource()
    restockingFee: Schema.MonetaryAmount | undefined;
    @property.literal({ path: schema.restockingFee, type: Number })
    restockingFeeLiteral: number | undefined;
    @property()
    returnFees: Schema.ReturnFeesEnumeration | undefined;
    @property()
    returnLabelSource: Schema.ReturnLabelSourceEnumeration | undefined;
    @property()
    returnMethod: Schema.ReturnMethodEnumeration | undefined;
    @property()
    returnPolicyCategory: Schema.MerchantReturnEnumeration | undefined;
    @property.resource()
    returnPolicyCountry: Schema.Country | undefined;
    @property.literal({ path: schema.returnPolicyCountry })
    returnPolicyCountryLiteral: string | undefined;
    @property.resource()
    returnPolicySeasonalOverride: Schema.MerchantReturnPolicySeasonalOverride | undefined;
    @property.resource()
    returnShippingFeesAmount: Schema.MonetaryAmount | undefined;
  }
  return MerchantReturnPolicyClass
}

class MerchantReturnPolicyImpl extends MerchantReturnPolicyMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MerchantReturnPolicy>) {
    super(arg, init)
    this.types.add(schema.MerchantReturnPolicy)
  }

  static readonly __mixins: Mixin[] = [MerchantReturnPolicyMixin, IntangibleMixin];
}
MerchantReturnPolicyMixin.appliesTo = schema.MerchantReturnPolicy
MerchantReturnPolicyMixin.Class = MerchantReturnPolicyImpl

export const fromPointer = createFactory<MerchantReturnPolicy>([IntangibleMixin, MerchantReturnPolicyMixin], { types: [schema.MerchantReturnPolicy] });
