import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<AutoWash>) {
    super(arg, init)
    this.types.add(schema.AutoWash)
  }
}
AutoWashMixin.shouldApply = (r: RdfResource) => r.types.has(schema.AutoWash)
AutoWashMixin.Class = AutoWashImpl
