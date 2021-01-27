import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { prov } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Prov from '..';
import { ActivityMixin } from './Activity';

export interface Replace<D extends RDF.DatasetCore = RDF.DatasetCore> extends Prov.Activity<D>, RdfResource<D> {
}

export function ReplaceMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Replace> & RdfResourceCore> & Base {
  @namespace(prov)
  class ReplaceClass extends ActivityMixin(Resource) implements Partial<Replace> {
  }
  return ReplaceClass
}

class ReplaceImpl extends ReplaceMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Replace>) {
    super(arg, init)
    this.types.add(prov.Replace)
  }

  static readonly __mixins: Mixin[] = [ReplaceMixin, ActivityMixin];
}
ReplaceMixin.appliesTo = prov.Replace
ReplaceMixin.Class = ReplaceImpl

export const fromPointer = createFactory<Replace>([ActivityMixin, ReplaceMixin], { types: [prov.Replace] });
