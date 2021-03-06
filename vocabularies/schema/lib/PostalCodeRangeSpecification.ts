import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { StructuredValueMixin } from './StructuredValue';

export interface PostalCodeRangeSpecification<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.StructuredValue<D>, RdfResource<D> {
  postalCodeBegin: string | undefined;
  postalCodeEnd: string | undefined;
}

export function PostalCodeRangeSpecificationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<PostalCodeRangeSpecification> & RdfResourceCore> & Base {
  @namespace(schema)
  class PostalCodeRangeSpecificationClass extends StructuredValueMixin(Resource) implements Partial<PostalCodeRangeSpecification> {
    @property.literal()
    postalCodeBegin: string | undefined;
    @property.literal()
    postalCodeEnd: string | undefined;
  }
  return PostalCodeRangeSpecificationClass
}

class PostalCodeRangeSpecificationImpl extends PostalCodeRangeSpecificationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<PostalCodeRangeSpecification>) {
    super(arg, init)
    this.types.add(schema.PostalCodeRangeSpecification)
  }

  static readonly __mixins: Mixin[] = [PostalCodeRangeSpecificationMixin, StructuredValueMixin];
}
PostalCodeRangeSpecificationMixin.appliesTo = schema.PostalCodeRangeSpecification
PostalCodeRangeSpecificationMixin.Class = PostalCodeRangeSpecificationImpl

export const fromPointer = createFactory<PostalCodeRangeSpecification>([StructuredValueMixin, PostalCodeRangeSpecificationMixin], { types: [schema.PostalCodeRangeSpecification] });
