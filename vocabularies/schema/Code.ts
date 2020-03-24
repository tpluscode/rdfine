import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import CreativeWorkMixin from './CreativeWork';

export interface Code extends Schema.CreativeWork, RdfResource {
}

export default function CodeMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CodeClass extends CreativeWorkMixin(Resource) implements Code {
  }
  return CodeClass
}

class CodeImpl extends CodeMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.Code)
  }
}
CodeMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Code)
CodeMixin.Class = CodeImpl
