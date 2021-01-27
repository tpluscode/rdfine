import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { prov } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Prov from '..';
import { EntityInfluenceMixin } from './EntityInfluence';
import { InstantaneousEventMixin } from './InstantaneousEvent';

export interface End<D extends RDF.DatasetCore = RDF.DatasetCore> extends Prov.EntityInfluence<D>, Prov.InstantaneousEvent<D>, RdfResource<D> {
  hadActivity: Prov.Activity<D> | undefined;
}

export function EndMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<End> & RdfResourceCore> & Base {
  @namespace(prov)
  class EndClass extends InstantaneousEventMixin(EntityInfluenceMixin(Resource)) implements Partial<End> {
    @property.resource({ implicitTypes: [prov.Activity] })
    hadActivity: Prov.Activity | undefined;
  }
  return EndClass
}

class EndImpl extends EndMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<End>) {
    super(arg, init)
    this.types.add(prov.End)
  }

  static readonly __mixins: Mixin[] = [EndMixin, EntityInfluenceMixin, InstantaneousEventMixin];
}
EndMixin.appliesTo = prov.End
EndMixin.Class = EndImpl

export const fromPointer = createFactory<End>([InstantaneousEventMixin, EntityInfluenceMixin, EndMixin], { types: [prov.End] });
