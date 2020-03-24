import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import StructuredValueMixin from './StructuredValue';

export interface TypeAndQuantityNode extends Schema.StructuredValue, RdfResource {
  amountOfThisGood: number;
  businessFunction: Schema.BusinessFunction;
  typeOfGood: Schema.Product | Schema.Service;
  unitCode: rdf.Term;
  unitCodeLiteral: string;
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
    @property()
    unitCode!: rdf.Term;
    @property.literal({ path: schema.unitCode })
    unitCodeLiteral!: string;
    @property.literal()
    unitText!: string;
  }
  return TypeAndQuantityNodeClass
}

class TypeAndQuantityNodeImpl extends TypeAndQuantityNodeMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<TypeAndQuantityNode>) {
    super(arg)
    this.types.add(schema.TypeAndQuantityNode)
    initializeProperties(this, init)
  }
}
TypeAndQuantityNodeMixin.shouldApply = (r: RdfResource) => r.types.has(schema.TypeAndQuantityNode)
TypeAndQuantityNodeMixin.Class = TypeAndQuantityNodeImpl
