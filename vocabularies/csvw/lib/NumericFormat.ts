import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { csvw } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Csvw from '..';

export interface NumericFormat<D extends RDF.DatasetCore = RDF.DatasetCore> extends RdfResource<D> {
  decimalChar: string | undefined;
  groupChar: Csvw.NumericFormat<D> | undefined;
  groupCharLiteral: string | undefined;
  pattern: string | undefined;
}

export function NumericFormatMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<NumericFormat> & RdfResourceCore> & Base {
  @namespace(csvw)
  class NumericFormatClass extends Resource implements Partial<NumericFormat> {
    @property.literal()
    decimalChar: string | undefined;
    @property.resource({ as: [NumericFormatMixin] })
    groupChar: Csvw.NumericFormat | undefined;
    @property.literal({ path: csvw.groupChar })
    groupCharLiteral: string | undefined;
    @property.literal()
    pattern: string | undefined;
  }
  return NumericFormatClass
}

class NumericFormatImpl extends NumericFormatMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<NumericFormat>) {
    super(arg, init)
    this.types.add(csvw.NumericFormat)
  }

  static readonly __mixins: Mixin[] = [NumericFormatMixin];
}
NumericFormatMixin.appliesTo = csvw.NumericFormat
NumericFormatMixin.Class = NumericFormatImpl

export const fromPointer = createFactory<NumericFormat>([NumericFormatMixin], { types: [csvw.NumericFormat] });
