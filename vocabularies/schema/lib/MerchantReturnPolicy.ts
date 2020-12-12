import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { IntangibleMixin } from './Intangible';

export interface MerchantReturnPolicy<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Intangible<D>, RdfResource<D> {
  inStoreReturnsOffered: boolean | undefined;
  merchantReturnDays: number | undefined;
  merchantReturnLink: RDF.NamedNode | undefined;
  refundType: Schema.RefundTypeEnumeration | undefined;
  returnFees: Schema.ReturnFeesEnumeration | undefined;
  returnPolicyCategory: Schema.MerchantReturnEnumeration | undefined;
}

export function MerchantReturnPolicyMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<MerchantReturnPolicy> & RdfResourceCore> & Base {
  @namespace(schema)
  class MerchantReturnPolicyClass extends IntangibleMixin(Resource) implements Partial<MerchantReturnPolicy> {
    @property.literal({ type: Boolean })
    inStoreReturnsOffered: boolean | undefined;
    @property.literal({ type: Number })
    merchantReturnDays: number | undefined;
    @property()
    merchantReturnLink: RDF.NamedNode | undefined;
    @property()
    refundType: Schema.RefundTypeEnumeration | undefined;
    @property()
    returnFees: Schema.ReturnFeesEnumeration | undefined;
    @property()
    returnPolicyCategory: Schema.MerchantReturnEnumeration | undefined;
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
