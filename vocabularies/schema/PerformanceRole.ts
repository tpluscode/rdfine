import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { RoleMixin } from './Role';

export interface PerformanceRole extends Schema.Role, RdfResource {
  characterName: string;
}

export function PerformanceRoleMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PerformanceRoleClass extends RoleMixin(Resource) implements PerformanceRole {
    @property.literal()
    characterName!: string;
  }
  return PerformanceRoleClass
}

class PerformanceRoleImpl extends PerformanceRoleMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<PerformanceRole>) {
    super(arg, init)
    this.types.add(schema.PerformanceRole)
  }

  static readonly __mixins: Mixin[] = [PerformanceRoleMixin, RoleMixin];
}
PerformanceRoleMixin.appliesTo = schema.PerformanceRole
PerformanceRoleMixin.Class = PerformanceRoleImpl
