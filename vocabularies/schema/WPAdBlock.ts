import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.WPAdBlock)
  }
}
WPAdBlockMixin.shouldApply = (r: RdfResource) => r.types.has(schema.WPAdBlock)
WPAdBlockMixin.Class = WPAdBlockImpl
