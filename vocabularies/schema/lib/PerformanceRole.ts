import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { RoleMixin } from './Role.js';

export interface PerformanceRole<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Role<D>, rdfine.RdfResource<D> {
  characterName: string | undefined;
}

export function PerformanceRoleMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<PerformanceRole> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class PerformanceRoleClass extends RoleMixin(Resource) implements Partial<PerformanceRole> {
    @rdfine.property.literal()
    characterName: string | undefined;
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

export const fromPointer = createFactory<PerformanceRole>([RoleMixin, PerformanceRoleMixin], { types: [schema.PerformanceRole] });
