import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { DefinedTermSetMixin } from './DefinedTermSet';

export interface CategoryCodeSet<ID extends ResourceNode = ResourceNode> extends Schema.DefinedTermSet<ID>, RdfResource<ID> {
  hasCategoryCode: Schema.CategoryCode<SiblingNode<ID>> | undefined;
}

export function CategoryCodeSetMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CategoryCodeSetClass extends DefinedTermSetMixin(Resource) implements CategoryCodeSet {
    @property.resource()
    hasCategoryCode: Schema.CategoryCode | undefined;
  }
  return CategoryCodeSetClass
}

class CategoryCodeSetImpl extends CategoryCodeSetMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<CategoryCodeSet>) {
    super(arg, init)
    this.types.add(schema.CategoryCodeSet)
  }

  static readonly __mixins: Mixin[] = [CategoryCodeSetMixin, DefinedTermSetMixin];
}
CategoryCodeSetMixin.appliesTo = schema.CategoryCodeSet
CategoryCodeSetMixin.Class = CategoryCodeSetImpl
