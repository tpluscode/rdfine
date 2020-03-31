import { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { csvw } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Csvw from '.';

export interface Dialect extends RdfResource {
  commentPrefix: string;
  delimiter: string;
  doubleQuote: boolean;
  encoding: string;
  header: boolean;
  headerRowCount: number;
  lineTerminators: string;
  quoteChar: string;
  skipBlankRows: boolean;
  skipColumns: number;
  skipInitialSpace: boolean;
  skipRows: number;
  trim: boolean;
}

export default function DialectMixin<Base extends Constructor>(Resource: Base) {
  @namespace(csvw)
  class DialectClass extends Resource implements Dialect {
    @property.literal()
    commentPrefix!: string;
    @property.literal()
    delimiter!: string;
    @property.literal({ type: Boolean })
    doubleQuote!: boolean;
    @property.literal()
    encoding!: string;
    @property.literal({ type: Boolean })
    header!: boolean;
    @property.literal({ type: Number })
    headerRowCount!: number;
    @property.literal()
    lineTerminators!: string;
    @property.literal()
    quoteChar!: string;
    @property.literal({ type: Boolean })
    skipBlankRows!: boolean;
    @property.literal({ type: Number })
    skipColumns!: number;
    @property.literal({ type: Boolean })
    skipInitialSpace!: boolean;
    @property.literal({ type: Number })
    skipRows!: number;
    @property.literal({ type: Boolean })
    trim!: boolean;
  }
  return DialectClass
}

class DialectImpl extends DialectMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Dialect>) {
    super(arg, init)
    this.types.add(csvw.Dialect)
  }
}
DialectMixin.shouldApply = (r: RdfResource) => r.types.has(csvw.Dialect)
DialectMixin.Class = DialectImpl
