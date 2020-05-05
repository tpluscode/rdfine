import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { WebPageMixin } from './WebPage';

export interface CollectionPage extends Schema.WebPage, RdfResource {
}

export function CollectionPageMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CollectionPageClass extends WebPageMixin(Resource) implements CollectionPage {
  }
  return CollectionPageClass
}

class CollectionPageImpl extends CollectionPageMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<CollectionPage>) {
    super(arg, init)
    this.types.add(schema.CollectionPage)
  }

  static readonly __mixins: Mixin[] = [CollectionPageMixin, WebPageMixin];
}
CollectionPageMixin.appliesTo = schema.CollectionPage
CollectionPageMixin.Class = CollectionPageImpl
