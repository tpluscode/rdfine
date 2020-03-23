import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import StructuredValueMixin from './StructuredValue';

export interface TypeAndQuantityNode extends Schema.StructuredValue, RdfResource {
  amountOfThisGood: number;
  businessFunction: Schema.BusinessFunction;
  typeOfGood: Schema.Product | Schema.Service;
  unitCode: string | string;
  unitText: string;
}

export default function TypeAndQuantityNodeMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class TypeAndQuantityNodeClass extends StructuredValueMixin(Resource) implements TypeAndQuantityNode {
    @property.literal({ type: Number })
    amountOfThisGood!: number;
    @property()
    businessFunction!: Schema.BusinessFunction;
    @property.resource()
    typeOfGood!: Schema.Product | Schema.Service;
    @property.literal()
    unitCode!: string | string;
    @property.literal()
    unitText!: string;
  }
  return TypeAndQuantityNodeClass
}

class TypeAndQuantityNodeImpl extends TypeAndQuantityNodeMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.TypeAndQuantityNode)
  }
}
TypeAndQuantityNodeMixin.shouldApply = (r: RdfResource) => r.types.has(schema.TypeAndQuantityNode)
TypeAndQuantityNodeMixin.Class = TypeAndQuantityNodeImpl
