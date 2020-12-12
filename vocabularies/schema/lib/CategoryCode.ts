import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';

export interface CategoryCode<D extends RDF.DatasetCore = RDF.DatasetCore> extends RdfResource<D> {
  codeValue: string | undefined;
  inCodeSet: Schema.CategoryCodeSet<D> | undefined;
}

export function CategoryCodeMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<CategoryCode> & RdfResourceCore> & Base {
  @namespace(schema)
  class CategoryCodeClass extends Resource implements Partial<CategoryCode> {
    @property.literal()
    codeValue: string | undefined;
    @property.resource()
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
