import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { csvw } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Csvw from '../index.js';

export interface Datatype<D extends RDF.DatasetCore = RDF.DatasetCore> extends RdfResource<D> {
  base: string | undefined;
  format: string | undefined;
  length: number | undefined;
  maxExclusive: number | undefined;
  maxInclusive: number | undefined;
  maxLength: number | undefined;
  minExclusive: number | undefined;
  minInclusive: number | undefined;
  minLength: number | undefined;
}

export function DatatypeMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Datatype> & RdfResourceCore> & Base {
  @namespace(csvw)
  class DatatypeClass extends Resource implements Partial<Datatype> {
    @property.literal()
    base: string | undefined;
    @property.literal()
    format: string | undefined;
    @property.literal({ type: Number })
    length: number | undefined;
    @property.literal({ type: Number })
    maxExclusive: number | undefined;
    @property.literal({ type: Number })
    maxInclusive: number | undefined;
    @property.literal({ type: Number })
    maxLength: number | undefined;
    @property.literal({ type: Number })
    minExclusive: number | undefined;
    @property.literal({ type: Number })
    minInclusive: number | undefined;
    @property.literal({ type: Number })
    minLength: number | undefined;
  }
  return DatatypeClass
}

class DatatypeImpl extends DatatypeMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Datatype>) {
    super(arg, init)
    this.types.add(csvw.Datatype)
  }

  static readonly __mixins: Mixin[] = [DatatypeMixin];
}
DatatypeMixin.appliesTo = csvw.Datatype
DatatypeMixin.Class = DatatypeImpl

export const fromPointer = createFactory<Datatype>([DatatypeMixin], { types: [csvw.Datatype] });
