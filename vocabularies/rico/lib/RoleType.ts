import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { TypeMixin } from './Type.js';

export interface RoleType<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Type<D>, rdfine.RdfResource<D> {
  roleIsContextOfCreationRelation: Rico.CreationRelation<D> | undefined;
}

export function RoleTypeMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<RoleType & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class RoleTypeClass extends TypeMixin(Resource) {
    @rdfine.property.resource({ implicitTypes: [rico.CreationRelation] })
    roleIsContextOfCreationRelation: Rico.CreationRelation | undefined;
  }
  return RoleTypeClass as any
}

class RoleTypeImpl extends RoleTypeMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<RoleType>) {
    super(arg, init)
    this.types.add(rico.RoleType)
  }

  static readonly __mixins: Mixin[] = [RoleTypeMixin, TypeMixin];
}
RoleTypeMixin.appliesTo = rico.RoleType
RoleTypeMixin.Class = RoleTypeImpl

export const fromPointer = createFactory<RoleType>([TypeMixin, RoleTypeMixin], { types: [rico.RoleType] });
