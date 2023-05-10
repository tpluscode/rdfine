import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { sh } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '../index.js';
import type * as Rdfs from '@rdfine/rdfs';
import { ResourceMixin as RdfsResourceMixin } from '@rdfine/rdfs/lib/Resource';

export interface PropertyGroup<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdfs.Resource<D>, rdfine.RdfResource<D> {
  order: number | undefined;
}

export function PropertyGroupMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<PropertyGroup> & RdfResourceCore> & Base {
  @rdfine.namespace(sh)
  class PropertyGroupClass extends RdfsResourceMixin(Resource) implements Partial<PropertyGroup> {
    @rdfine.property.literal({ type: Number })
    order: number | undefined;
  }
  return PropertyGroupClass
}

class PropertyGroupImpl extends PropertyGroupMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<PropertyGroup>) {
    super(arg, init)
    this.types.add(sh.PropertyGroup)
  }

  static readonly __mixins: Mixin[] = [PropertyGroupMixin, RdfsResourceMixin];
}
PropertyGroupMixin.appliesTo = sh.PropertyGroup
PropertyGroupMixin.Class = PropertyGroupImpl

export const fromPointer = createFactory<PropertyGroup>([RdfsResourceMixin, PropertyGroupMixin], { types: [sh.PropertyGroup] });
