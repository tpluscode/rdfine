import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { hydra } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Hydra from '..';
import { ResourceMixin } from './Resource';

export interface VariableRepresentation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Hydra.Resource<D>, RdfResource<D> {
}

export function VariableRepresentationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<VariableRepresentation> & RdfResourceCore> & Base {
  @namespace(hydra)
  class VariableRepresentationClass extends ResourceMixin(Resource) implements Partial<VariableRepresentation> {
  }
  return VariableRepresentationClass
}

class VariableRepresentationImpl extends VariableRepresentationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<VariableRepresentation>) {
    super(arg, init)
    this.types.add(hydra.VariableRepresentation)
  }

  static readonly __mixins: Mixin[] = [VariableRepresentationMixin, ResourceMixin];
}
VariableRepresentationMixin.appliesTo = hydra.VariableRepresentation
VariableRepresentationMixin.Class = VariableRepresentationImpl
