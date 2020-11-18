import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';

export interface Optician<D extends RDF.DatasetCore = RDF.DatasetCore> extends RdfResource<D> {
}

export function OpticianMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class OpticianClass extends Resource implements Optician {
  }
  return OpticianClass
}

class OpticianImpl extends OpticianMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Optician>) {
    super(arg, init)
    this.types.add(schema.Optician)
  }

  static readonly __mixins: Mixin[] = [OpticianMixin];
}
OpticianMixin.appliesTo = schema.Optician
OpticianMixin.Class = OpticianImpl
