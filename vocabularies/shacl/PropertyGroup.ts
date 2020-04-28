import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { sh } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Sh from '.';
import type * as Rdfs from '@rdfine/rdfs';
import RdfsResourceMixin from '@rdfine/rdfs/Resource';

export interface PropertyGroup extends Rdfs.Resource, RdfResource {
}

export default function PropertyGroupMixin<Base extends Constructor>(Resource: Base) {
  @namespace(sh)
  class PropertyGroupClass extends RdfsResourceMixin(Resource) implements PropertyGroup {
  }
  return PropertyGroupClass
}

class PropertyGroupImpl extends PropertyGroupMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<PropertyGroup>) {
    super(arg, init)
    this.types.add(sh.PropertyGroup)
  }
}
PropertyGroupMixin.shouldApply = (r: RdfResource) => r.types.has(sh.PropertyGroup)
PropertyGroupMixin.Class = PropertyGroupImpl
