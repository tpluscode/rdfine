import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';

export interface CategoryCode<D extends RDF.DatasetCore = RDF.DatasetCore> extends rdfine.RdfResource<D> {
  codeValue: string | undefined;
  inCodeSet: Schema.CategoryCodeSet<D> | undefined;
}

export function CategoryCodeMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<CategoryCode> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class CategoryCodeClass extends Resource implements Partial<CategoryCode> {
    @rdfine.property.literal()
    codeValue: string | undefined;
    @rdfine.property.resource()
    inCodeSet: Schema.CategoryCodeSet | undefined;
  }
  return CategoryCodeClass
}

class CategoryCodeImpl extends CategoryCodeMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<CategoryCode>) {
    super(arg, init)
    this.types.add(schema.CategoryCode)
  }

  static readonly __mixins: Mixin[] = [CategoryCodeMixin];
}
CategoryCodeMixin.appliesTo = schema.CategoryCode
CategoryCodeMixin.Class = CategoryCodeImpl

export const fromPointer = createFactory<CategoryCode>([CategoryCodeMixin], { types: [schema.CategoryCode] });
