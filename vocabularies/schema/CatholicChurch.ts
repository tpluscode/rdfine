import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { ChurchMixin } from './Church';

export interface CatholicChurch<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Church<D>, RdfResource<D> {
}

export function CatholicChurchMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CatholicChurchClass extends ChurchMixin(Resource) implements CatholicChurch {
  }
  return CatholicChurchClass
}

class CatholicChurchImpl extends CatholicChurchMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<CatholicChurch>) {
    super(arg, init)
    this.types.add(schema.CatholicChurch)
  }

  static readonly __mixins: Mixin[] = [CatholicChurchMixin, ChurchMixin];
}
CatholicChurchMixin.appliesTo = schema.CatholicChurch
CatholicChurchMixin.Class = CatholicChurchImpl
