import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { hydra } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Hydra from '..';
import type * as Rdfs from '@rdfine/rdfs';
import { ResourceMixin as RdfsResourceMixin } from '@rdfine/rdfs/lib/Resource';
import { ResourceExMixin } from '../extensions/ResourceEx';

export interface Resource<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdfs.Resource<D>, RdfResource<D> {
  first: Hydra.Resource<D> | undefined;
  freetextQuery: string | undefined;
  last: Hydra.Resource<D> | undefined;
  next: Hydra.Resource<D> | undefined;
  operation: Array<Hydra.Operation<D>>;
  previous: Hydra.Resource<D> | undefined;
  search: Hydra.IriTemplate<D> | undefined;
  view: Array<Hydra.Resource<D>>;
}

export function ResourceMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Resource> & RdfResourceCore> & Base {
  @namespace(hydra)
  class ResourceClass extends ResourceExMixin(RdfsResourceMixin(Resource)) implements Partial<Resource> {
    @property.resource({ as: [ResourceMixin] })
    first: Hydra.Resource | undefined;
    @property.literal()
    freetextQuery: string | undefined;
    @property.resource({ as: [ResourceMixin] })
    last: Hydra.Resource | undefined;
    @property.resource({ as: [ResourceMixin] })
    next: Hydra.Resource | undefined;
    @property.resource({ values: 'array', implicitTypes: [hydra.Operation] })
    operation!: Array<Hydra.Operation>;
    @property.resource({ as: [ResourceMixin] })
    previous: Hydra.Resource | undefined;
    @property.resource({ implicitTypes: [hydra.IriTemplate] })
    search: Hydra.IriTemplate | undefined;
    @property.resource({ values: 'array' })
    view!: Array<Hydra.Resource>;
  }
  return ResourceClass
}

class ResourceImpl extends ResourceMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Resource>) {
    super(arg, init)
    this.types.add(hydra.Resource)
  }

  static readonly __mixins: Mixin[] = [ResourceExMixin, ResourceMixin, RdfsResourceMixin];
}
ResourceMixin.appliesTo = hydra.Resource
ResourceMixin.Class = ResourceImpl

export const fromPointer = createFactory<Resource>([RdfsResourceMixin, ResourceMixin], { types: [hydra.Resource] });
