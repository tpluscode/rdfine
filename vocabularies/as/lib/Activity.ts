import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { as } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '..';
import { ObjectMixin } from './Object';

export interface Activity<D extends RDF.DatasetCore = RDF.DatasetCore> extends As.Object<D>, RdfResource<D> {
  actor: As.Link<D> | As.Object<D> | undefined;
  instrument: As.Link<D> | As.Object<D> | undefined;
  object: As.Link<D> | As.Object<D> | undefined;
  origin: As.Link<D> | As.Object<D> | undefined;
  result: As.Link<D> | As.Object<D> | undefined;
  target: As.Link<D> | As.Object<D> | undefined;
  verb: string | undefined;
}

export function ActivityMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Activity> & RdfResourceCore> & Base {
  @namespace(as)
  class ActivityClass extends ObjectMixin(Resource) implements Partial<Activity> {
    @property.resource()
    actor: As.Link | As.Object | undefined;
    @property.resource()
    instrument: As.Link | As.Object | undefined;
    @property.resource()
    object: As.Link | As.Object | undefined;
    @property.resource()
    origin: As.Link | As.Object | undefined;
    @property.resource()
    result: As.Link | As.Object | undefined;
    @property.resource()
    target: As.Link | As.Object | undefined;
    @property.literal()
    verb: string | undefined;
  }
  return ActivityClass
}

class ActivityImpl extends ActivityMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Activity>) {
    super(arg, init)
    this.types.add(as.Activity)
  }

  static readonly __mixins: Mixin[] = [ActivityMixin, ObjectMixin];
}
ActivityMixin.appliesTo = as.Activity
ActivityMixin.Class = ActivityImpl

export const fromPointer = createFactory<Activity>([ObjectMixin, ActivityMixin], { types: [as.Activity] });
