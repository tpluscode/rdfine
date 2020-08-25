import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { ConsumeActionMixin } from './ConsumeAction';

export interface ReadAction extends Schema.ConsumeAction, RdfResource {
}

export function ReadActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ReadActionClass extends ConsumeActionMixin(Resource) implements ReadAction {
  }
  return ReadActionClass
}

class ReadActionImpl extends ReadActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ReadAction>) {
    super(arg, init)
    this.types.add(schema.ReadAction)
  }

  static readonly __mixins: Mixin[] = [ReadActionMixin, ConsumeActionMixin];
}
ReadActionMixin.appliesTo = schema.ReadAction
ReadActionMixin.Class = ReadActionImpl
