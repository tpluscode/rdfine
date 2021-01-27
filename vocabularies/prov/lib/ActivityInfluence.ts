import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { prov } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Prov from '..';
import { InfluenceMixin } from './Influence';

export interface ActivityInfluence<D extends RDF.DatasetCore = RDF.DatasetCore> extends Prov.Influence<D>, RdfResource<D> {
  activity: Prov.Activity<D> | undefined;
}

export function ActivityInfluenceMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<ActivityInfluence> & RdfResourceCore> & Base {
  @namespace(prov)
  class ActivityInfluenceClass extends InfluenceMixin(Resource) implements Partial<ActivityInfluence> {
    @property.resource({ implicitTypes: [prov.Activity] })
    activity: Prov.Activity | undefined;
  }
  return ActivityInfluenceClass
}

class ActivityInfluenceImpl extends ActivityInfluenceMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ActivityInfluence>) {
    super(arg, init)
    this.types.add(prov.ActivityInfluence)
  }

  static readonly __mixins: Mixin[] = [ActivityInfluenceMixin, InfluenceMixin];
}
ActivityInfluenceMixin.appliesTo = prov.ActivityInfluence
ActivityInfluenceMixin.Class = ActivityInfluenceImpl

export const fromPointer = createFactory<ActivityInfluence>([InfluenceMixin, ActivityInfluenceMixin], { types: [prov.ActivityInfluence] });
