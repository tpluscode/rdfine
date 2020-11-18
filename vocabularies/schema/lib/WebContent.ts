import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, ResourceIdentifier, DatasetType } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CreativeWorkMixin } from './CreativeWork';

export interface WebContent<ID extends ResourceNode = ResourceNode> extends Schema.CreativeWork<ID>, RdfResource<ID> {
}

export function WebContentMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class WebContentClass extends CreativeWorkMixin(Resource) implements WebContent {
  }
  return WebContentClass
}

class WebContentImpl extends WebContentMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<WebContent>) {
    super(arg, init)
    this.types.add(schema.WebContent)
  }

  static readonly __mixins: Mixin[] = [WebContentMixin, CreativeWorkMixin];
}
WebContentMixin.appliesTo = schema.WebContent
WebContentMixin.Class = WebContentImpl
