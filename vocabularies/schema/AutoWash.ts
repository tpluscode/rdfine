import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import AutomotiveBusinessMixin from './AutomotiveBusiness';

export interface AutoWash extends Schema.AutomotiveBusiness, RdfResource {
}

export default function AutoWashMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class AutoWashClass extends AutomotiveBusinessMixin(Resource) implements AutoWash {
  }
  return AutoWashClass
}

class AutoWashImpl extends AutoWashMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<AutoWash>) {
    super(arg)
    this.types.add(schema.AutoWash)
    initializeProperties(this, init)
  }
}
AutoWashMixin.shouldApply = (r: RdfResource) => r.types.has(schema.AutoWash)
AutoWashMixin.Class = AutoWashImpl
