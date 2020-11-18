import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { csvw } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Csvw from '..';

export interface Dialect<D extends RDF.DatasetCore = RDF.DatasetCore> extends RdfResource<D> {
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

export function DialectMixin<Base extends Constructor>(Resource: Base) {
  @namespace(csvw)
  class DialectClass extends Resource implements Dialect {
    @property.literal()
    commentPrefix: string | undefined;
    @property.literal()
    delimiter: string | undefined;
    @property.literal({ type: Boolean })
    doubleQuote: boolean | undefined;
    @property.literal()
    encoding: string | undefined;
    @property.literal({ type: Boolean })
    header: boolean | undefined;
    @property.literal({ type: Number })
    headerRowCount: number | undefined;
    @property.literal()
    lineTerminators: string | undefined;
    @property.literal()
    quoteChar: string | undefined;
    @property.literal({ type: Boolean })
    skipBlankRows: boolean | undefined;
    @property.literal({ type: Number })
    skipColumns: number | undefined;
    @property.literal({ type: Boolean })
    skipInitialSpace: boolean | undefined;
    @property.literal({ type: Number })
    skipRows: number | undefined;
    @property.literal({ type: Boolean })
    trim: boolean | undefined;
  }
  return DialectClass
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
