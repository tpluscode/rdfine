import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { csvw } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Csvw from '../index.js';

export interface Datatype<D extends RDF.DatasetCore = RDF.DatasetCore> extends rdfine.RdfResource<D> {
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

export function DatatypeMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Datatype & RdfResourceCore> & Base {
  @rdfine.namespace(csvw)
  class DatatypeClass extends Resource {
    @rdfine.property.literal()
    base: string | undefined;
    @rdfine.property.literal()
    format: string | undefined;
    @rdfine.property.literal({ type: Number })
    length: number | undefined;
    @rdfine.property.literal({ type: Number })
    maxExclusive: number | undefined;
    @rdfine.property.literal({ type: Number })
    maxInclusive: number | undefined;
    @rdfine.property.literal({ type: Number })
    maxLength: number | undefined;
    @rdfine.property.literal({ type: Number })
    minExclusive: number | undefined;
    @rdfine.property.literal({ type: Number })
    minInclusive: number | undefined;
    @rdfine.property.literal({ type: Number })
    minLength: number | undefined;
  }
  return DatatypeClass as any
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
