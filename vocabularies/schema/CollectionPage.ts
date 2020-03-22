import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import WebPageMixin from './WebPage';

export interface CollectionPage extends Schema.WebPage, RdfResource {
}

export default function CollectionPageMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CollectionPageClass extends WebPageMixin(Resource) implements CollectionPage {
  }
  return CollectionPageClass
}

class CollectionPageImpl extends CollectionPageMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.CollectionPage)
  }
}
CollectionPageMixin.shouldApply = (r: RdfResource) => r.types.has(schema.CollectionPage)
CollectionPageMixin.Class = CollectionPageImpl
