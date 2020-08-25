import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { WebPageElementMixin } from './WebPageElement';

export interface WPAdBlock extends Schema.WebPageElement, RdfResource {
}

export function WPAdBlockMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class WPAdBlockClass extends WebPageElementMixin(Resource) implements WPAdBlock {
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
