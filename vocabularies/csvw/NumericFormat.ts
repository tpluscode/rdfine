import { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { csvw } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Csvw from '.';

export interface NumericFormat extends RdfResource {
  decimalChar: string;
  groupChar: Csvw.NumericFormat;
  groupCharLiteral: string;
  pattern: string;
}

export default function NumericFormatMixin<Base extends Constructor>(Resource: Base) {
  @namespace(csvw)
  class NumericFormatClass extends Resource implements NumericFormat {
    @property.literal()
    decimalChar!: string;
    @property.resource({ as: [NumericFormatMixin] })
    groupChar!: Csvw.NumericFormat;
    @property.literal({ path: csvw.groupChar })
    groupCharLiteral!: string;
    @property.literal()
    pattern!: string;
  }
  return NumericFormatClass
}

class NumericFormatImpl extends NumericFormatMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<NumericFormat>) {
    super(arg, init)
    this.types.add(csvw.NumericFormat)
  }
}
NumericFormatMixin.shouldApply = (r: RdfResource) => r.types.has(csvw.NumericFormat)
NumericFormatMixin.Class = NumericFormatImpl
