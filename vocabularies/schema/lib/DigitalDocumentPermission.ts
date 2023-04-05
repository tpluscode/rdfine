import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { IntangibleMixin } from './Intangible.js';

export interface DigitalDocumentPermission<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Intangible<D>, RdfResource<D> {
  grantee: Schema.Audience<D> | Schema.ContactPoint<D> | Schema.Organization<D> | Schema.Person<D> | undefined;
  permissionType: Schema.DigitalDocumentPermissionType | undefined;
}

export function DigitalDocumentPermissionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<DigitalDocumentPermission> & RdfResourceCore> & Base {
  @namespace(schema)
  class DigitalDocumentPermissionClass extends IntangibleMixin(Resource) implements Partial<DigitalDocumentPermission> {
    @property.resource()
    grantee: Schema.Audience | Schema.ContactPoint | Schema.Organization | Schema.Person | undefined;
    @property()
    permissionType: Schema.DigitalDocumentPermissionType | undefined;
  }
  return DigitalDocumentPermissionClass
}

class DigitalDocumentPermissionImpl extends DigitalDocumentPermissionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<DigitalDocumentPermission>) {
    super(arg, init)
    this.types.add(schema.DigitalDocumentPermission)
  }

  static readonly __mixins: Mixin[] = [DigitalDocumentPermissionMixin, IntangibleMixin];
}
DigitalDocumentPermissionMixin.appliesTo = schema.DigitalDocumentPermission
DigitalDocumentPermissionMixin.Class = DigitalDocumentPermissionImpl

export const fromPointer = createFactory<DigitalDocumentPermission>([IntangibleMixin, DigitalDocumentPermissionMixin], { types: [schema.DigitalDocumentPermission] });
