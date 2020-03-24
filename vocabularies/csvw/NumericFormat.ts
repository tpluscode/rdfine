import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { csvw } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Csvw from '.';

export interface NumericFormat extends RdfResource {
  decimalChar: string;
  groupChar: NumericFormat;
  groupCharLiteral: string;
  pattern: string;
}

export default function NumericFormatMixin<Base extends Constructor>(Resource: Base) {
  @namespace(csvw)
  class NumericFormatClass extends Resource implements NumericFormat {
    @property.literal()
    decimalChar!: string;
    @property.resource()
    groupChar!: NumericFormat;
    @property.literal({ path: csvw.groupChar })
    groupCharLiteral!: string;
    @property.literal()
    pattern!: string;
  }
  return NumericFormatClass
}

class NumericFormatImpl extends NumericFormatMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<NumericFormat>) {
    super(arg)
    this.types.add(csvw.NumericFormat)
    initializeProperties(this, init)
  }
}
NumericFormatMixin.shouldApply = (r: RdfResource) => r.types.has(csvw.NumericFormat)
NumericFormatMixin.Class = NumericFormatImpl
