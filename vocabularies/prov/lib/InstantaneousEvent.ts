import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { prov } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Prov from '..';

export interface InstantaneousEvent<D extends RDF.DatasetCore = RDF.DatasetCore> extends RdfResource<D> {
  atLocation: Prov.Location<D> | undefined;
  atTime: Date | undefined;
  hadRole: Prov.Role<D> | undefined;
}

export function InstantaneousEventMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<InstantaneousEvent> & RdfResourceCore> & Base {
  @namespace(prov)
  class InstantaneousEventClass extends Resource implements Partial<InstantaneousEvent> {
    @property.resource({ implicitTypes: [prov.Location] })
    atLocation: Prov.Location | undefined;
    @property.literal({ type: Date })
    atTime: Date | undefined;
    @property.resource({ implicitTypes: [prov.Role] })
    hadRole: Prov.Role | undefined;
  }
  return InstantaneousEventClass
}

class InstantaneousEventImpl extends InstantaneousEventMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<InstantaneousEvent>) {
    super(arg, init)
    this.types.add(prov.InstantaneousEvent)
  }

  static readonly __mixins: Mixin[] = [InstantaneousEventMixin];
}
InstantaneousEventMixin.appliesTo = prov.InstantaneousEvent
InstantaneousEventMixin.Class = InstantaneousEventImpl

export const fromPointer = createFactory<InstantaneousEvent>([InstantaneousEventMixin], { types: [prov.InstantaneousEvent] });
