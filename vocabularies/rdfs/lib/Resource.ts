import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { rdfs } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rdfs from '..';

export interface Resource<D extends RDF.DatasetCore = RDF.DatasetCore> extends RdfResource<D> {
  comment: string | undefined;
  isDefinedBy: Rdfs.Resource<D> | undefined;
  label: string | undefined;
  seeAlso: Array<Rdfs.Resource<D>>;
}

export function ResourceMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Resource> & RdfResourceCore> & Base {
  @namespace(rdfs)
  class ResourceClass extends Resource implements Partial<Resource> {
    @property.literal()
    comment: string | undefined;
    @property.resource({ as: [ResourceMixin] })
    isDefinedBy: Rdfs.Resource | undefined;
    @property.literal()
    label: string | undefined;
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

export const fromPointer = createFactory<Resource>([ResourceMixin], { types: [rdfs.Resource] });
