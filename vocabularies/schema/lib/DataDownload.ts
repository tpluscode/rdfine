import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { MediaObjectMixin } from './MediaObject';

export interface DataDownload<ID extends ResourceNode = ResourceNode> extends Schema.MediaObject<ID>, RdfResource<ID> {
  measurementTechnique: string | undefined;
  measurementTechniqueTerm: RDF.NamedNode | undefined;
}

export function DataDownloadMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class DataDownloadClass extends MediaObjectMixin(Resource) implements DataDownload {
    @property.literal()
    measurementTechnique: string | undefined;
    @property({ path: schema.measurementTechnique })
    measurementTechniqueTerm: RDF.NamedNode | undefined;
  }
  return DataDownloadClass
}

class DataDownloadImpl extends DataDownloadMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<DataDownload>) {
    super(arg, init)
    this.types.add(schema.DataDownload)
  }

  static readonly __mixins: Mixin[] = [DataDownloadMixin, MediaObjectMixin];
}
DataDownloadMixin.appliesTo = schema.DataDownload
DataDownloadMixin.Class = DataDownloadImpl
