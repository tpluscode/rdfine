import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { IntangibleMixin } from './Intangible';

export interface StructuredValue extends Schema.Intangible, RdfResource {
}

export function StructuredValueMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class StructuredValueClass extends IntangibleMixin(Resource) implements StructuredValue {
  }
  return StructuredValueClass
}

class StructuredValueImpl extends StructuredValueMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<StructuredValue>) {
    super(arg, init)
    this.types.add(schema.StructuredValue)
  }

  static readonly __mixins: Mixin[] = [StructuredValueMixin, IntangibleMixin];
}
StructuredValueMixin.appliesTo = schema.StructuredValue
StructuredValueMixin.Class = StructuredValueImpl
