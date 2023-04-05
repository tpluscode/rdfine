import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { WebPageElementMixin } from './WebPageElement';

export interface WPAdBlock<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.WebPageElement<D>, RdfResource<D> {
}

export function WPAdBlockMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<WPAdBlock> & RdfResourceCore> & Base {
  @namespace(schema)
  class WPAdBlockClass extends WebPageElementMixin(Resource) implements Partial<WPAdBlock> {
  }
  return WPAdBlockClass
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
