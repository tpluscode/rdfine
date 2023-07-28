import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CreativeWorkMixin } from './CreativeWork.js';

export interface WebContent<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, rdfine.RdfResource<D> {
}

export function WebContentMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<WebContent & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class WebContentClass extends CreativeWorkMixin(Resource) {
  }
  return WebContentClass as any
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

export const fromPointer = createFactory<WebContent>([CreativeWorkMixin, WebContentMixin], { types: [schema.WebContent] });
