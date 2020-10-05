import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { sh } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '.';
import * as Rdfs from '@rdfine/rdfs';

export interface PropertyGroup<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdfs.Resource<D>, RdfResource<D> {
  order: number | undefined;
}

export function PropertyGroupMixin<Base extends Constructor>(Resource: Base) {
  @namespace(sh)
  class PropertyGroupClass extends Rdfs.ResourceMixin(Resource) implements PropertyGroup {
    @property.literal({ type: Number })
    order: number | undefined;
  }
  return PropertyGroupClass
}

class PropertyGroupImpl extends PropertyGroupMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<PropertyGroup>) {
    super(arg, init)
    this.types.add(sh.PropertyGroup)
  }

  static readonly __mixins: Mixin[] = [PropertyGroupMixin, Rdfs.ResourceMixin];
}
PropertyGroupMixin.appliesTo = sh.PropertyGroup
PropertyGroupMixin.Class = PropertyGroupImpl
