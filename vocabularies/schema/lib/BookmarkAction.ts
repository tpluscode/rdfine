import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { OrganizeActionMixin } from './OrganizeAction';

export interface BookmarkAction<ID extends ResourceNode = ResourceNode> extends Schema.OrganizeAction<ID>, RdfResource<ID> {
}

export function BookmarkActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class BookmarkActionClass extends OrganizeActionMixin(Resource) implements BookmarkAction {
  }
  return BookmarkActionClass
}

class BookmarkActionImpl extends BookmarkActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<BookmarkAction>) {
    super(arg, init)
    this.types.add(schema.BookmarkAction)
  }

  static readonly __mixins: Mixin[] = [BookmarkActionMixin, OrganizeActionMixin];
}
BookmarkActionMixin.appliesTo = schema.BookmarkAction
BookmarkActionMixin.Class = BookmarkActionImpl
