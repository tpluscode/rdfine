import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { csvw } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Csvw from '../index.js';

export interface NumericFormat<D extends RDF.DatasetCore = RDF.DatasetCore> extends rdfine.RdfResource<D> {
  decimalChar: string | undefined;
  groupChar: Csvw.NumericFormat<D> | undefined;
  groupCharLiteral: string | undefined;
  pattern: string | undefined;
}

export function NumericFormatMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<NumericFormat> & RdfResourceCore> & Base {
  @rdfine.namespace(csvw)
  class NumericFormatClass extends Resource implements Partial<NumericFormat> {
    @rdfine.property.literal()
    decimalChar: string | undefined;
    @rdfine.property.resource({ as: [NumericFormatMixin] })
    groupChar: Csvw.NumericFormat | undefined;
    @rdfine.property.literal({ path: csvw.groupChar })
    groupCharLiteral: string | undefined;
    @rdfine.property.literal()
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
