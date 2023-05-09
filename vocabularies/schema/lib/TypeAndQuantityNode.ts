import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { StructuredValueMixin } from './StructuredValue.js';

export interface TypeAndQuantityNode<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.StructuredValue<D>, rdfine.RdfResource<D> {
  amountOfThisGood: number | undefined;
  businessFunction: Schema.BusinessFunction | undefined;
  typeOfGood: Schema.Product<D> | Schema.Service<D> | undefined;
  unitCode: string | undefined;
  unitCodeTerm: RDF.NamedNode | undefined;
  unitText: string | undefined;
}

export function TypeAndQuantityNodeMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<TypeAndQuantityNode> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class TypeAndQuantityNodeClass extends StructuredValueMixin(Resource) implements Partial<TypeAndQuantityNode> {
    @rdfine.property.literal({ type: Number })
    amountOfThisGood: number | undefined;
    @rdfine.property()
    businessFunction: Schema.BusinessFunction | undefined;
    @rdfine.property.resource()
    typeOfGood: Schema.Product | Schema.Service | undefined;
    @rdfine.property.literal()
    unitCode: string | undefined;
    @rdfine.property({ path: schema.unitCode })
    unitCodeTerm: RDF.NamedNode | undefined;
    @rdfine.property.literal()
    unitText: string | undefined;
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

export const fromPointer = createFactory<TypeAndQuantityNode>([StructuredValueMixin, TypeAndQuantityNodeMixin], { types: [schema.TypeAndQuantityNode] });
