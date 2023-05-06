import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { dash } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '../index.js';
import type * as Rdfs from '@rdfine/rdfs';
import { ResourceMixin as RdfsResourceMixin } from '@rdfine/rdfs/lib/Resource.js';

export interface PropertyRole<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdfs.Resource<D>, RdfResource<D> {
}

export function PropertyRoleMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<PropertyRole> & RdfResourceCore> & Base {
  @namespace(dash)
  class PropertyRoleClass extends RdfsResourceMixin(Resource) implements Partial<PropertyRole> {
  }
  return PropertyRoleClass
}

class PropertyRoleImpl extends PropertyRoleMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<PropertyRole>) {
    super(arg, init)
    this.types.add(dash.PropertyRole)
  }

  static readonly __mixins: Mixin[] = [PropertyRoleMixin, RdfsResourceMixin];
}
PropertyRoleMixin.appliesTo = dash.PropertyRole
PropertyRoleMixin.Class = PropertyRoleImpl

export const fromPointer = createFactory<PropertyRole>([RdfsResourceMixin, PropertyRoleMixin], { types: [dash.PropertyRole] });
