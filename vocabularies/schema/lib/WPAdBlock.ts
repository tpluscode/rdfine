import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { WebPageElementMixin } from './WebPageElement.js';

export interface WPAdBlock<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.WebPageElement<D>, rdfine.RdfResource<D> {
}

export function WPAdBlockMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<WPAdBlock & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class WPAdBlockClass extends WebPageElementMixin(Resource) {
  }
  return WPAdBlockClass as any
}

class WPAdBlockImpl extends WPAdBlockMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<WPAdBlock>) {
    super(arg, init)
    this.types.add(schema.WPAdBlock)
  }

  static readonly __mixins: Mixin[] = [WPAdBlockMixin, WebPageElementMixin];
}
WPAdBlockMixin.appliesTo = schema.WPAdBlock
WPAdBlockMixin.Class = WPAdBlockImpl

export const fromPointer = createFactory<WPAdBlock>([WebPageElementMixin, WPAdBlockMixin], { types: [schema.WPAdBlock] });
