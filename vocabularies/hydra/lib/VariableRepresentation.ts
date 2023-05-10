import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { hydra } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Hydra from '../index.js';

export interface VariableRepresentation<D extends RDF.DatasetCore = RDF.DatasetCore> extends rdfine.RdfResource<D> {
}

export function VariableRepresentationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<VariableRepresentation> & RdfResourceCore> & Base {
  @rdfine.namespace(hydra)
  class VariableRepresentationClass extends Resource implements Partial<VariableRepresentation> {
  }
  return VariableRepresentationClass
}

class VariableRepresentationImpl extends VariableRepresentationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<VariableRepresentation>) {
    super(arg, init)
    this.types.add(hydra.VariableRepresentation)
  }

  static readonly __mixins: Mixin[] = [VariableRepresentationMixin];
}
VariableRepresentationMixin.appliesTo = hydra.VariableRepresentation
VariableRepresentationMixin.Class = VariableRepresentationImpl

export const fromPointer = createFactory<VariableRepresentation>([VariableRepresentationMixin], { types: [hydra.VariableRepresentation] });
