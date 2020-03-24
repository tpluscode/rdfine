import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import OrganizeActionMixin from './OrganizeAction';

export interface BookmarkAction extends Schema.OrganizeAction, RdfResource {
}

export default function BookmarkActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class BookmarkActionClass extends OrganizeActionMixin(Resource) implements BookmarkAction {
  }
  return BookmarkActionClass
}

class BookmarkActionImpl extends BookmarkActionMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.BookmarkAction)
  }
}
BookmarkActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.BookmarkAction)
BookmarkActionMixin.Class = BookmarkActionImpl
