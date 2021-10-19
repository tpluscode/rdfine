import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { IntangibleMixin } from './Intangible';

export interface MerchantReturnPolicySeasonalOverride<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Intangible<D>, RdfResource<D> {
  endDate: Date | undefined;
  merchantReturnDays: Date | number | undefined;
  returnPolicyCategory: Schema.MerchantReturnEnumeration | undefined;
  startDate: Date | undefined;
}

export function MerchantReturnPolicySeasonalOverrideMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<MerchantReturnPolicySeasonalOverride> & RdfResourceCore> & Base {
  @namespace(schema)
  class MerchantReturnPolicySeasonalOverrideClass extends IntangibleMixin(Resource) implements Partial<MerchantReturnPolicySeasonalOverride> {
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    endDate: Date | undefined;
    @property.literal({ datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    merchantReturnDays: Date | number | undefined;
    @property()
    returnPolicyCategory: Schema.MerchantReturnEnumeration | undefined;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    startDate: Date | undefined;
  }
  return MerchantReturnPolicySeasonalOverrideClass
}

class MerchantReturnPolicySeasonalOverrideImpl extends MerchantReturnPolicySeasonalOverrideMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MerchantReturnPolicySeasonalOverride>) {
    super(arg, init)
    this.types.add(schema.MerchantReturnPolicySeasonalOverride)
  }

  static readonly __mixins: Mixin[] = [MerchantReturnPolicySeasonalOverrideMixin, IntangibleMixin];
}
MerchantReturnPolicySeasonalOverrideMixin.appliesTo = schema.MerchantReturnPolicySeasonalOverride
MerchantReturnPolicySeasonalOverrideMixin.Class = MerchantReturnPolicySeasonalOverrideImpl

export const fromPointer = createFactory<MerchantReturnPolicySeasonalOverride>([IntangibleMixin, MerchantReturnPolicySeasonalOverrideMixin], { types: [schema.MerchantReturnPolicySeasonalOverride] });
