import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { prov } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Prov from '..';
import { ActivityMixin } from './Activity';

export interface Copyright<D extends RDF.DatasetCore = RDF.DatasetCore> extends Prov.Activity<D>, RdfResource<D> {
}

export function CopyrightMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Copyright> & RdfResourceCore> & Base {
  @namespace(prov)
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
