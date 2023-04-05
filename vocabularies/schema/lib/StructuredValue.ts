import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { IntangibleMixin } from './Intangible.js';

export interface StructuredValue<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Intangible<D>, RdfResource<D> {
}

export function StructuredValueMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<StructuredValue> & RdfResourceCore> & Base {
  @namespace(schema)
  class StructuredValueClass extends IntangibleMixin(Resource) implements Partial<StructuredValue> {
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

export const fromPointer = createFactory<StructuredValue>([IntangibleMixin, StructuredValueMixin], { types: [schema.StructuredValue] });
