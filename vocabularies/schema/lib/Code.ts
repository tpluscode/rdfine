import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CreativeWorkMixin } from './CreativeWork.js';

export interface Code<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, RdfResource<D> {
}

export function CodeMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Code> & RdfResourceCore> & Base {
  @namespace(schema)
  class CodeClass extends CreativeWorkMixin(Resource) implements Partial<Code> {
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

export const fromPointer = createFactory<Code>([CreativeWorkMixin, CodeMixin], { types: [schema.Code] });
