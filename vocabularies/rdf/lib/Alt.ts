import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rdf } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rdf from '../index.js';

export interface Alt<D extends RDF.DatasetCore = RDF.DatasetCore> extends rdfine.RdfResource<D> {
}

export function AltMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Alt> & RdfResourceCore> & Base {
  @rdfine.namespace(rdf)
  class AltClass extends Resource implements Partial<Alt> {
  }
  return AltClass
}

class AltImpl extends AltMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Alt>) {
    super(arg, init)
    this.types.add(rdf.Alt)
  }

  static readonly __mixins: Mixin[] = [AltMixin];
}
AltMixin.appliesTo = rdf.Alt
AltMixin.Class = AltImpl

export const fromPointer = createFactory<Alt>([AltMixin], { types: [rdf.Alt] });
