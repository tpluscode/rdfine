import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { TypeMixin } from './Type.js';

export interface ActivityType<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Type<D>, RdfResource<D> {
  isActivityTypeOf: Rico.Activity<D> | undefined;
}

export function ActivityTypeMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<ActivityType> & RdfResourceCore> & Base {
  @namespace(rico)
  class ActivityTypeClass extends TypeMixin(Resource) implements Partial<ActivityType> {
    @property.resource({ implicitTypes: [rico.Activity] })
    isActivityTypeOf: Rico.Activity | undefined;
  }
  return ActivityTypeClass
}

class ActivityTypeImpl extends ActivityTypeMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ActivityType>) {
    super(arg, init)
    this.types.add(rico.ActivityType)
  }

  static readonly __mixins: Mixin[] = [ActivityTypeMixin, TypeMixin];
}
ActivityTypeMixin.appliesTo = rico.ActivityType
ActivityTypeMixin.Class = ActivityTypeImpl

export const fromPointer = createFactory<ActivityType>([TypeMixin, ActivityTypeMixin], { types: [rico.ActivityType] });
