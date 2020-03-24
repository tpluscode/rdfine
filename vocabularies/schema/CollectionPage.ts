import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<CollectionPage>) {
    super(arg)
    this.types.add(schema.CollectionPage)
    initializeProperties(this, init)
  }
}
CollectionPageMixin.shouldApply = (r: RdfResource) => r.types.has(schema.CollectionPage)
CollectionPageMixin.Class = CollectionPageImpl
