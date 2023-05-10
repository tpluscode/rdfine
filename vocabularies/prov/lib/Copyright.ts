import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { prov } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Prov from '../index.js';
import { ActivityMixin } from './Activity.js';

export interface Copyright<D extends RDF.DatasetCore = RDF.DatasetCore> extends Prov.Activity<D>, rdfine.RdfResource<D> {
}

export function CopyrightMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Copyright> & RdfResourceCore> & Base {
  @rdfine.namespace(prov)
  class CopyrightClass extends ActivityMixin(Resource) implements Partial<Copyright> {
  }
  return CopyrightClass
}

class CopyrightImpl extends CopyrightMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Copyright>) {
    super(arg, init)
    this.types.add(prov.Copyright)
  }

  static readonly __mixins: Mixin[] = [CopyrightMixin, ActivityMixin];
}
CopyrightMixin.appliesTo = prov.Copyright
CopyrightMixin.Class = CopyrightImpl

export const fromPointer = createFactory<Copyright>([ActivityMixin, CopyrightMixin], { types: [prov.Copyright] });
