import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { WebPageElementMixin } from './WebPageElement.js';

export interface WPHeader<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.WebPageElement<D>, rdfine.RdfResource<D> {
}

export function WPHeaderMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<WPHeader> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class WPHeaderClass extends WebPageElementMixin(Resource) implements Partial<WPHeader> {
  }
  return WPHeaderClass
}

class WPHeaderImpl extends WPHeaderMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<WPHeader>) {
    super(arg, init)
    this.types.add(schema.WPHeader)
  }

  static readonly __mixins: Mixin[] = [WPHeaderMixin, WebPageElementMixin];
}
WPHeaderMixin.appliesTo = schema.WPHeader
WPHeaderMixin.Class = WPHeaderImpl

export const fromPointer = createFactory<WPHeader>([WebPageElementMixin, WPHeaderMixin], { types: [schema.WPHeader] });
