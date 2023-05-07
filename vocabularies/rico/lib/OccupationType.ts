import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { ActivityTypeMixin } from './ActivityType.js';
import { DemographicGroupMixin } from './DemographicGroup.js';

export interface OccupationType<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.ActivityType<D>, Rico.DemographicGroup<D>, RdfResource<D> {
  isOrWasOccupationTypeOf: Rico.Person<D> | undefined;
}

export function OccupationTypeMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<OccupationType> & RdfResourceCore> & Base {
  @namespace(rico)
  class OccupationTypeClass extends DemographicGroupMixin(ActivityTypeMixin(Resource)) implements Partial<OccupationType> {
    @property.resource({ implicitTypes: [rico.Person] })
    isOrWasOccupationTypeOf: Rico.Person | undefined;
  }
  return OccupationTypeClass
}

class OccupationTypeImpl extends OccupationTypeMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<OccupationType>) {
    super(arg, init)
    this.types.add(rico.OccupationType)
  }

  static readonly __mixins: Mixin[] = [OccupationTypeMixin, ActivityTypeMixin, DemographicGroupMixin];
}
OccupationTypeMixin.appliesTo = rico.OccupationType
OccupationTypeMixin.Class = OccupationTypeImpl

export const fromPointer = createFactory<OccupationType>([DemographicGroupMixin, ActivityTypeMixin, OccupationTypeMixin], { types: [rico.OccupationType] });
