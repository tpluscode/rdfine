import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import WebPageElementMixin from './WebPageElement';

export interface WPAdBlock extends Schema.WebPageElement, RdfResource {
}

export default function WPAdBlockMixin<Base extends Constructor>(Resource: Base) {
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
}
WPAdBlockMixin.shouldApply = (r: RdfResource) => r.types.has(schema.WPAdBlock)
WPAdBlockMixin.Class = WPAdBlockImpl
