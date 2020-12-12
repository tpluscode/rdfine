import { ExtendingConstructor, Constructor, namespace, property } from '@tpluscode/rdfine';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { rdfs } from '@tpluscode/rdf-ns-builders';
import { owl } from '../../lib/namespace';
import type * as Owl from '../..';
import type * as Rdfs from '@rdfine/rdfs';
import type * as Rdf from '@rdfine/rdf';
import { ResourceMixin as RdfsResourceMixin } from '@rdfine/rdfs/lib/Resource';
import { ListMixin as RdfListMixin } from '@rdfine/rdf/lib/List';

interface ResourceEx<D extends RDF.DatasetCore = RDF.DatasetCore> {
  annotatedProperty: Rdfs.Resource<D> | undefined;
  annotatedSource: Rdfs.Resource<D> | undefined;
  annotatedTarget: Rdfs.Resource<D> | undefined;
  deprecated: Rdfs.Resource<D> | undefined;
  members: Rdf.List<D> | undefined;
  versionInfo: Rdfs.Resource<D> | undefined;
}

declare module '@rdfine/rdfs/lib/Resource' {
  interface Resource<D extends RDF.DatasetCore> extends ResourceEx<D> {
  }
}

export function ResourceMixinEx<Base extends ExtendingConstructor<Rdfs.Resource, ResourceEx>>(Resource: Base): Constructor<ResourceEx & RdfResourceCore> & Base {
  @namespace(owl)
  class Impl extends Resource implements ResourceEx {
    @property.resource({ as: [RdfsResourceMixin] })
    annotatedProperty: Rdfs.Resource | undefined;
    @property.resource({ as: [RdfsResourceMixin] })
    annotatedSource: Rdfs.Resource | undefined;
    @property.resource({ as: [RdfsResourceMixin] })
    annotatedTarget: Rdfs.Resource | undefined;
    @property.resource({ as: [RdfsResourceMixin] })
    deprecated: Rdfs.Resource | undefined;
    @property.resource({ as: [RdfListMixin] })
    members: Rdf.List | undefined;
    @property.resource({ as: [RdfsResourceMixin] })
    versionInfo: Rdfs.Resource | undefined;
  }
  return Impl
}
ResourceMixinEx.appliesTo = rdfs.Resource
