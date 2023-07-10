import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { csvw } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Csvw from '../index.js';

export interface Dialect<D extends RDF.DatasetCore = RDF.DatasetCore> extends rdfine.RdfResource<D> {
  commentPrefix: string | undefined;
  delimiter: string | undefined;
  doubleQuote: boolean | undefined;
  encoding: string | undefined;
  header: boolean | undefined;
  headerRowCount: number | undefined;
  lineTerminators: string | undefined;
  quoteChar: string | undefined;
  skipBlankRows: boolean | undefined;
  skipColumns: number | undefined;
  skipInitialSpace: boolean | undefined;
  skipRows: number | undefined;
  trim: boolean | undefined;
}

export function DialectMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Dialect & RdfResourceCore> & Base {
  @rdfine.namespace(csvw)
  class DialectClass extends Resource {
    @rdfine.property.literal()
    commentPrefix: string | undefined;
    @rdfine.property.literal()
    delimiter: string | undefined;
    @rdfine.property.literal({ type: Boolean })
    doubleQuote: boolean | undefined;
    @rdfine.property.literal()
    encoding: string | undefined;
    @rdfine.property.literal({ type: Boolean })
    header: boolean | undefined;
    @rdfine.property.literal({ type: Number })
    headerRowCount: number | undefined;
    @rdfine.property.literal()
    lineTerminators: string | undefined;
    @rdfine.property.literal()
    quoteChar: string | undefined;
    @rdfine.property.literal({ type: Boolean })
    skipBlankRows: boolean | undefined;
    @rdfine.property.literal({ type: Number })
    skipColumns: number | undefined;
    @rdfine.property.literal({ type: Boolean })
    skipInitialSpace: boolean | undefined;
    @rdfine.property.literal({ type: Number })
    skipRows: number | undefined;
    @rdfine.property.literal({ type: Boolean })
    trim: boolean | undefined;
  }
  return DialectClass as any
}

class DialectImpl extends DialectMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Dialect>) {
    super(arg, init)
    this.types.add(csvw.Dialect)
  }

  static readonly __mixins: Mixin[] = [DialectMixin];
}
DialectMixin.appliesTo = csvw.Dialect
DialectMixin.Class = DialectImpl

export const fromPointer = createFactory<Dialect>([DialectMixin], { types: [csvw.Dialect] });
