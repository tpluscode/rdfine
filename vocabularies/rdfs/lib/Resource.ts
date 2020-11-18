import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { rdfs } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rdfs from '..';

export interface Resource<ID extends ResourceNode = ResourceNode> extends RdfResource<ID> {
  comment: string | undefined;
  isDefinedBy: Rdfs.Resource<SiblingNode<ID>> | undefined;
  label: string | undefined;
  member: Array<Rdfs.Resource<SiblingNode<ID>>>;
  seeAlso: Array<Rdfs.Resource<SiblingNode<ID>>>;
}

export function ResourceMixin<Base extends Constructor>(Resource: Base) {
  @namespace(rdfs)
  class ResourceClass extends Resource implements Resource {
    @property.literal()
    comment: string | undefined;
    @property.resource({ as: [ResourceMixin] })
    isDefinedBy: Rdfs.Resource | undefined;
    @property.literal()
    label: string | undefined;
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
