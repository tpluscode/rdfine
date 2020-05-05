import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { csvw } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Csvw from '.';

export interface Datatype extends RdfResource {
  base: string;
  format: string;
  length: number;
  maxExclusive: number;
  maxInclusive: number;
  maxLength: number;
  minExclusive: number;
  minInclusive: number;
  minLength: number;
}

export function DatatypeMixin<Base extends Constructor>(Resource: Base) {
  @namespace(csvw)
  class DatatypeClass extends Resource implements Datatype {
    @property.literal()
    base!: string;
    @property.literal()
    format!: string;
    @property.literal({ type: Number })
    length!: number;
    @property.literal({ type: Number })
    maxExclusive!: number;
    @property.literal({ type: Number })
    maxInclusive!: number;
    @property.literal({ type: Number })
    maxLength!: number;
    @property.literal({ type: Number })
    minExclusive!: number;
    @property.literal({ type: Number })
    minInclusive!: number;
    @property.literal({ type: Number })
    minLength!: number;
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
