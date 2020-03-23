import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import ThingMixin from './Thing';

export interface Intangible extends Schema.Thing, RdfResource {
}

export default function IntangibleMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class IntangibleClass extends ThingMixin(Resource) implements Intangible {
  }
  return IntangibleClass
}

class IntangibleImpl extends IntangibleMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.Intangible)
  }
}
IntangibleMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Intangible)
IntangibleMixin.Class = IntangibleImpl
