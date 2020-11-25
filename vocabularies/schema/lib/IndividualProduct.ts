import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ProductMixin } from './Product';

export interface IndividualProduct<ID extends ResourceNode = ResourceNode> extends Schema.Product<ID>, RdfResource<ID> {
  serialNumber: string | undefined;
}

export function IndividualProductMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class IndividualProductClass extends ProductMixin(Resource) implements IndividualProduct {
    @property.literal()
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
