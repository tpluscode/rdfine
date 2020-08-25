import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { CreativeWorkMixin } from './CreativeWork';

export interface Code extends Schema.CreativeWork, RdfResource {
}

export function CodeMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CodeClass extends CreativeWorkMixin(Resource) implements Code {
  }
  return CodeClass
}

class CodeImpl extends CodeMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Code>) {
    super(arg, init)
    this.types.add(schema.Code)
  }

  static readonly __mixins: Mixin[] = [CodeMixin, CreativeWorkMixin];
}
CodeMixin.appliesTo = schema.Code
CodeMixin.Class = CodeImpl
