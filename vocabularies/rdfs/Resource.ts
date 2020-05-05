import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { rdfs } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rdfs from '.';

export interface Resource extends RdfResource {
  comment: string;
  isDefinedBy: Rdfs.Resource;
  label: string;
  member: Array<Rdfs.Resource>;
  seeAlso: Array<Rdfs.Resource>;
}

export function ResourceMixin<Base extends Constructor>(Resource: Base) {
  @namespace(rdfs)
  class ResourceClass extends Resource implements Resource {
    @property.literal()
    comment!: string;
    @property.resource({ as: [ResourceMixin] })
    isDefinedBy!: Rdfs.Resource;
    @property.literal()
    label!: string;
    @property.resource({ values: 'array', as: [ResourceMixin] })
    member!: Array<Rdfs.Resource>;
    @property.resource({ values: 'array', as: [ResourceMixin] })
    seeAlso!: Array<Rdfs.Resource>;
  }
  return ResourceClass
}

class ResourceImpl extends ResourceMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Resource>) {
    super(arg, init)
    this.types.add(rdfs.Resource)
  }

  static readonly __mixins: Mixin[] = [ResourceMixin];
}
ResourceMixin.appliesTo = rdfs.Resource
ResourceMixin.Class = ResourceImpl
