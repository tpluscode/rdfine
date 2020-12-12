import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { StructuredValueMixin } from './StructuredValue';

export interface TypeAndQuantityNode<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.StructuredValue<D>, RdfResource<D> {
  amountOfThisGood: number | undefined;
  businessFunction: Schema.BusinessFunction | undefined;
  typeOfGood: Schema.Product<D> | Schema.Service<D> | undefined;
  unitCode: string | undefined;
  unitCodeTerm: RDF.NamedNode | undefined;
  unitText: string | undefined;
}

export function TypeAndQuantityNodeMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<TypeAndQuantityNode> & RdfResourceCore> & Base {
  @namespace(schema)
  class TypeAndQuantityNodeClass extends StructuredValueMixin(Resource) implements Partial<TypeAndQuantityNode> {
    @property.literal({ type: Number })
    amountOfThisGood: number | undefined;
    @property()
    businessFunction: Schema.BusinessFunction | undefined;
    @property.resource()
    typeOfGood: Schema.Product | Schema.Service | undefined;
    @property.literal()
    unitCode: string | undefined;
    @property({ path: schema.unitCode })
    unitCodeTerm: RDF.NamedNode | undefined;
    @property.literal()
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
