import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { StructuredValueMixin } from './StructuredValue.js';

export interface DatedMoneySpecification<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.StructuredValue<D>, RdfResource<D> {
  amount: Schema.MonetaryAmount<D> | undefined;
  amountLiteral: number | undefined;
  currency: string | undefined;
  endDate: Date | undefined;
  startDate: Date | undefined;
}

export function DatedMoneySpecificationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<DatedMoneySpecification> & RdfResourceCore> & Base {
  @namespace(schema)
  class DatedMoneySpecificationClass extends StructuredValueMixin(Resource) implements Partial<DatedMoneySpecification> {
    @property.resource()
    amount: Schema.MonetaryAmount | undefined;
    @property.literal({ path: schema.amount, type: Number })
    amountLiteral: number | undefined;
    @property.literal()
    currency: string | undefined;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    endDate: Date | undefined;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    startDate: Date | undefined;
  }
  return DatedMoneySpecificationClass
}

class DatedMoneySpecificationImpl extends DatedMoneySpecificationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<DatedMoneySpecification>) {
    super(arg, init)
    this.types.add(schema.DatedMoneySpecification)
  }

  static readonly __mixins: Mixin[] = [DatedMoneySpecificationMixin, StructuredValueMixin];
}
DatedMoneySpecificationMixin.appliesTo = schema.DatedMoneySpecification
DatedMoneySpecificationMixin.Class = DatedMoneySpecificationImpl

export const fromPointer = createFactory<DatedMoneySpecification>([StructuredValueMixin, DatedMoneySpecificationMixin], { types: [schema.DatedMoneySpecification] });
