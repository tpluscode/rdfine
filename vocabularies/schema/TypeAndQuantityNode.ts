import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { StructuredValueMixin } from './StructuredValue';

export interface TypeAndQuantityNode extends Schema.StructuredValue, RdfResource {
  amountOfThisGood: number;
  businessFunction: Schema.BusinessFunction;
  typeOfGood: Schema.Product | Schema.Service;
  unitCode: string;
  unitCodeTerm: RDF.NamedNode;
  unitText: string;
}

export function TypeAndQuantityNodeMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class TypeAndQuantityNodeClass extends StructuredValueMixin(Resource) implements TypeAndQuantityNode {
    @property.literal({ type: Number })
    amountOfThisGood!: number;
    @property()
    businessFunction!: Schema.BusinessFunction;
    @property.resource()
    typeOfGood!: Schema.Product | Schema.Service;
    @property.literal()
    unitCode!: string;
    @property({ path: schema.unitCode })
    unitCodeTerm!: RDF.NamedNode;
    @property.literal()
    unitText!: string;
  }
  return TypeAndQuantityNodeClass
}

class TypeAndQuantityNodeImpl extends TypeAndQuantityNodeMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<TypeAndQuantityNode>) {
    super(arg, init)
    this.types.add(schema.TypeAndQuantityNode)
  }

  static readonly __mixins: Mixin[] = [TypeAndQuantityNodeMixin, StructuredValueMixin];
}
TypeAndQuantityNodeMixin.appliesTo = schema.TypeAndQuantityNode
TypeAndQuantityNodeMixin.Class = TypeAndQuantityNodeImpl
