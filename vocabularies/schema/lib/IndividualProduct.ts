import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ProductMixin } from './Product.js';

export interface IndividualProduct<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Product<D>, rdfine.RdfResource<D> {
  serialNumber: string | undefined;
}

export function IndividualProductMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<IndividualProduct> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class IndividualProductClass extends ProductMixin(Resource) implements Partial<IndividualProduct> {
    @rdfine.property.literal()
    serialNumber: string | undefined;
  }
  return IndividualProductClass
}

class IndividualProductImpl extends IndividualProductMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<IndividualProduct>) {
    super(arg, init)
    this.types.add(schema.IndividualProduct)
  }

  static readonly __mixins: Mixin[] = [IndividualProductMixin, ProductMixin];
}
IndividualProductMixin.appliesTo = schema.IndividualProduct
IndividualProductMixin.Class = IndividualProductImpl

export const fromPointer = createFactory<IndividualProduct>([ProductMixin, IndividualProductMixin], { types: [schema.IndividualProduct] });
